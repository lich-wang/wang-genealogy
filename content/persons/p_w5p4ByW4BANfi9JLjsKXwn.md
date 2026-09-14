---
schema: wang-person/v1
id: p_w5p4ByW4BANfi9JLjsKXwn
status: active
merged_into: null
display_name: 王良臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rm7f7fDhJB2FHdv4gN91sV
        subject_person_id: p_w5p4ByW4BANfi9JLjsKXwn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MByoNUFnQPZR1vddaTgyWx
          claim_id: c_Rm7f7fDhJB2FHdv4gN91sV
          source_id: s_YUXzTXDrYpdS8kPEgyQq73
          stance: supports
          locator: CBDB:273653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273653）
          source: &a1
            id: s_YUXzTXDrYpdS8kPEgyQq73
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 273653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273653&o=json
            external_identifier: CBDB:273653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N376UE5PHgjrGuy932Bcbx
        subject_person_id: p_w5p4ByW4BANfi9JLjsKXwn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣，明人物。弘治十八年進士，籍贯湖廣布政司。（中国历代人物传记资料库 CBDB 273653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DVHOVQSxCk5cl0SMbNgWLW
          claim_id: c_N376UE5PHgjrGuy932Bcbx
          source_id: s_YUXzTXDrYpdS8kPEgyQq73
          stance: supports
          locator: CBDB:273653
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
  other:
    - claim:
        id: c_dcOzkyeHWcLHYb8ZRlYuN_
        subject_person_id: p_d6n2jnjPLQ88RNa223JnPk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w5p4ByW4BANfi9JLjsKXwn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i6SdOdy3bdOzXbuGwp6_2H
          claim_id: c_dcOzkyeHWcLHYb8ZRlYuN_
          source_id: s_huh-3SXlLG4joZ5ftbXVrs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126529 王良佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_huh-3SXlLG4joZ5ftbXVrs
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 273653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273653&o=json
            external_identifier: CBDB:273653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d6n2jnjPLQ88RNa223JnPk
        status: active
        display_name: 王良佐
        merged_into_person_id: null
---

# 王良臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良臣 | accepted |
| bio.summary | 王良臣，明人物。弘治十八年進士，籍贯湖廣布政司。（中国历代人物传记资料库 CBDB 273653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_d6n2jnjPLQ88RNa223JnPk | 王良佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良臣（CBDB 273653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273653&o=json)
