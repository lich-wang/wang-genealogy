---
schema: wang-person/v1
id: p_PbxA5kExiiybqPj12p98RP
status: active
merged_into: null
display_name: 王肇基
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4j8vgB1BmeYuEoe1Dpou6r
        subject_person_id: p_PbxA5kExiiybqPj12p98RP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kkEwt3Rd1Wr2gJti1xW7Gv
          claim_id: c_4j8vgB1BmeYuEoe1Dpou6r
          source_id: s_KpGpyhhQVrx747Vf9F1Rfe
          stance: supports
          locator: CBDB:565158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565158）
          source: &a1
            id: s_KpGpyhhQVrx747Vf9F1Rfe
            source_type: api_record
            title: 中国历代人物传记资料库：王肇基（CBDB 565158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565158&o=json
            external_identifier: CBDB:565158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qJQCxL65wJqUEehDDaRNZ5
        subject_person_id: p_PbxA5kExiiybqPj12p98RP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇基，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 565158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-Va67MmFNe399mVfQN5GPY
          claim_id: c_qJQCxL65wJqUEehDDaRNZ5
          source_id: s_KpGpyhhQVrx747Vf9F1Rfe
          stance: supports
          locator: CBDB:565158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WSYCPHlPPCDG1yyQFCdJ87
        subject_person_id: p_HtJXGePVKKH4zxe6hFMUEm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PbxA5kExiiybqPj12p98RP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ihw_GVlwB6S35-3b02bIi3
          claim_id: c_WSYCPHlPPCDG1yyQFCdJ87
          source_id: s_FgfKExQqjg81ACLcWRnDU3
          stance: supports
          locator: 國朝畫徵錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FgfKExQqjg81ACLcWRnDU3
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 565156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565156&o=json
            external_identifier: CBDB:565156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HtJXGePVKKH4zxe6hFMUEm
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王肇基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇基 | accepted |
| bio.summary | 王肇基，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 565158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HtJXGePVKKH4zxe6hFMUEm | 王斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 565156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565156&o=json)
- [中国历代人物传记资料库：王肇基（CBDB 565158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565158&o=json)
