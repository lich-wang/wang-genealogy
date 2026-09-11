---
schema: wang-person/v1
id: p_vNNRVNM4fb2RVGCGj65JaG
status: active
merged_into: null
display_name: 王鈍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wzE9qHPvKAGcjH2C4BysWn
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AgYDg5n7Zd3pcqPPaYeXFz
          claim_id: c_wzE9qHPvKAGcjH2C4BysWn
          source_id: s_c4f72e9txJXvFsDeQZthDX
          stance: supports
          locator: CBDB:247363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247363）
          source: &a1
            id: s_c4f72e9txJXvFsDeQZthDX
            source_type: api_record
            title: 中国历代人物传记资料库：王鈍（CBDB 247363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247363&o=json
            external_identifier: CBDB:247363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fNrQVo3grwHSDY1ccM38pt
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈍，明人物。成化八年進士，籍贯嵊縣，曾任訓導。（中国历代人物传记资料库 CBDB 247363）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pS3ax4lxBLFGiagqLeKAq-
          claim_id: c_fNrQVo3grwHSDY1ccM38pt
          source_id: s_c4f72e9txJXvFsDeQZthDX
          stance: supports
          locator: CBDB:247363
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nRnbEWc9Mb5pP5AJY4orlp
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SVgnxxxjLSBHiuLh4vjbmU
          claim_id: c_nRnbEWc9Mb5pP5AJY4orlp
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UajPbreWAJ8SWtEFXGFhUY
            source_type: api_record
            title: 中国历代人物传记资料库：王暄（CBDB 199620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json
            external_identifier: CBDB:199620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鈍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈍 | accepted |
| bio.summary | 王鈍，明人物。成化八年進士，籍贯嵊縣，曾任訓導。（中国历代人物传记资料库 CBDB 247363） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈍（CBDB 247363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247363&o=json)
- [中国历代人物传记资料库：王暄（CBDB 199620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json)
