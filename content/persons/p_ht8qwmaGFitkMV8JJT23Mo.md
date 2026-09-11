---
schema: wang-person/v1
id: p_ht8qwmaGFitkMV8JJT23Mo
status: active
merged_into: null
display_name: 王承宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ed6W6QEHUCD3vNPskyUU2V
        subject_person_id: p_ht8qwmaGFitkMV8JJT23Mo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JxiXiysmNAUhG9W9KuyWHH
          claim_id: c_Ed6W6QEHUCD3vNPskyUU2V
          source_id: s_hChyPetTCRUjnGAc2E4AEv
          stance: supports
          locator: CBDB:68801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68801）
          source: &a1
            id: s_hChyPetTCRUjnGAc2E4AEv
            source_type: api_record
            title: 中国历代人物传记资料库：王承宗（CBDB 68801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68801&o=json
            external_identifier: CBDB:68801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.095Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EReSYo24A3fa83MYurgXTs
        subject_person_id: p_ht8qwmaGFitkMV8JJT23Mo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承宗，清人物。曾任旗漢軍副都統、鑲紅旗漢軍副都統。（中国历代人物传记资料库 CBDB 68801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S14W9cfcZPDrjjjkTQiECW
          claim_id: c_EReSYo24A3fa83MYurgXTs
          source_id: s_hChyPetTCRUjnGAc2E4AEv
          stance: supports
          locator: CBDB:68801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承宗 | accepted |
| bio.summary | 王承宗，清人物。曾任旗漢軍副都統、鑲紅旗漢軍副都統。（中国历代人物传记资料库 CBDB 68801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承宗（CBDB 68801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68801&o=json)
