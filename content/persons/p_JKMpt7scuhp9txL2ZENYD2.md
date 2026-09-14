---
schema: wang-person/v1
id: p_JKMpt7scuhp9txL2ZENYD2
status: active
merged_into: null
display_name: 王著
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zXtgYdXAnNdogLKiBYpy7r
        subject_person_id: p_JKMpt7scuhp9txL2ZENYD2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王著
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LeMykDzvCQ5gHnKEwyBZEd
          claim_id: c_zXtgYdXAnNdogLKiBYpy7r
          source_id: s_vg2D27Em89cHJGxRwHJ4hY
          stance: supports
          locator: CBDB:36927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36927）
          source: &a1
            id: s_vg2D27Em89cHJGxRwHJ4hY
            source_type: api_record
            title: 中国历代人物传记资料库：王著（CBDB 36927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36927&o=json
            external_identifier: CBDB:36927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ebG95ePdv28c7padXMQ9wm
        subject_person_id: p_JKMpt7scuhp9txL2ZENYD2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王著，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2cbELyUT4SYv0M3Mg1SESF
          claim_id: c_ebG95ePdv28c7padXMQ9wm
          source_id: s_vg2D27Em89cHJGxRwHJ4hY
          stance: supports
          locator: CBDB:36927
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CJe6CVux-20A7abmRKvKsb
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JKMpt7scuhp9txL2ZENYD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z9u24AGmup8Fmn_7r4rXgD
          claim_id: c_CJe6CVux-20A7abmRKvKsb
          source_id: s_w5bJSsbYXcpe9CrlCf3TM8
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_w5bJSsbYXcpe9CrlCf3TM8
            source_type: api_record
            title: 中国历代人物传记资料库：王著（CBDB 36927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36927&o=json
            external_identifier: CBDB:36927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王著

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王著 | accepted |
| bio.summary | 王著，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王著（CBDB 36927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36927&o=json)
