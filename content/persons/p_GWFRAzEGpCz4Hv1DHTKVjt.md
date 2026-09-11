---
schema: wang-person/v1
id: p_GWFRAzEGpCz4Hv1DHTKVjt
status: active
merged_into: null
display_name: 王萬鑑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y3b5fnZmWYEJ8oqfMjkgad
        subject_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1CCKhMCC418R2ksaNvP7TH
          claim_id: c_y3b5fnZmWYEJ8oqfMjkgad
          source_id: s_LsAjpPazoWfJ62eySmwm5m
          stance: supports
          locator: CBDB:700317
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700317）
          source: &a1
            id: s_LsAjpPazoWfJ62eySmwm5m
            source_type: api_record
            title: 中国历代人物传记资料库：王萬鑑（CBDB 700317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700317&o=json
            external_identifier: CBDB:700317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iBbDhLGnAiLtNDZKVwte6Y
        subject_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬鑑，清人物。籍贯錢塘，入仕鄉貢舉人，曾任布政使司參議、知縣。（中国历代人物传记资料库 CBDB 700317）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FXPmvpt8gNbIa_FB9VNfYe
          claim_id: c_iBbDhLGnAiLtNDZKVwte6Y
          source_id: s_LsAjpPazoWfJ62eySmwm5m
          stance: supports
          locator: CBDB:700317
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6ITCy_eBckYkPrDOmCHY5J
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_toPVoqr3TmBfKLmLtpqRUZ
          claim_id: c_6ITCy_eBckYkPrDOmCHY5J
          source_id: s_LsAjpPazoWfJ62eySmwm5m
          stance: supports
          locator: 錢塘縣志，lgid=219724：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XgEAQzQVt489QyUMTNB972
        status: active
        display_name: 王維城
        merged_into_person_id: null
  children:
    - claim:
        id: c_vnG0TPuToKhrDrGoaeL3qF
        subject_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FxNwo3apNeHFEvguYHvrFg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PcqV9jg8lIEYoh8pjZfke_
          claim_id: c_vnG0TPuToKhrDrGoaeL3qF
          source_id: s_JCbJmqQMBH17cLLPXHWJcY
          stance: supports
          locator: 錢塘縣志，lgid=219724：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JCbJmqQMBH17cLLPXHWJcY
            source_type: api_record
            title: 中国历代人物传记资料库：王國治（CBDB 700325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700325&o=json
            external_identifier: CBDB:700325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FxNwo3apNeHFEvguYHvrFg
        status: active
        display_name: 王國治
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬鑑 | accepted |
| bio.summary | 王萬鑑，清人物。籍贯錢塘，入仕鄉貢舉人，曾任布政使司參議、知縣。（中国历代人物传记资料库 CBDB 700317） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XgEAQzQVt489QyUMTNB972 | 王維城 | accepted |
| children | p_FxNwo3apNeHFEvguYHvrFg | 王國治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國治（CBDB 700325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700325&o=json)
- [中国历代人物传记资料库：王萬鑑（CBDB 700317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700317&o=json)
