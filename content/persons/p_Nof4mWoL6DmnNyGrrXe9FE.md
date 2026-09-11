---
schema: wang-person/v1
id: p_Nof4mWoL6DmnNyGrrXe9FE
status: active
merged_into: null
display_name: 王挹真
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_USoF69m34u9NfJi7UG2ELJ
        subject_person_id: p_Nof4mWoL6DmnNyGrrXe9FE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挹真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QC9Jp79GDJKDE4wrMkzQ3B
          claim_id: c_USoF69m34u9NfJi7UG2ELJ
          source_id: s_wqv3yb2AtiNomqaRXk7okH
          stance: supports
          locator: CBDB:560915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560915）
          source: &a1
            id: s_wqv3yb2AtiNomqaRXk7okH
            source_type: api_record
            title: 中国历代人物传记资料库：王挹真（CBDB 560915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560915&o=json
            external_identifier: CBDB:560915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7gn3RQbHFW2qS8z9xddfHf
        subject_person_id: p_Nof4mWoL6DmnNyGrrXe9FE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挹真，明人物。身份为畫家。（中国历代人物传记资料库 CBDB 560915）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mHjpMBFpEWbj0uadCc_0kt
          claim_id: c_7gn3RQbHFW2qS8z9xddfHf
          source_id: s_wqv3yb2AtiNomqaRXk7okH
          stance: supports
          locator: CBDB:560915
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

# 王挹真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王挹真 | accepted |
| bio.summary | 王挹真，明人物。身份为畫家。（中国历代人物传记资料库 CBDB 560915） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王挹真（CBDB 560915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560915&o=json)
