---
schema: wang-person/v1
id: p_e8CzP933ScAcMGL5dkqzB8
status: active
merged_into: null
display_name: 王志遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6TidFvyq4e1syBggFeL1UT
        subject_person_id: p_e8CzP933ScAcMGL5dkqzB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ySiDZ89ezJe4itXW7SBQ46
          claim_id: c_6TidFvyq4e1syBggFeL1UT
          source_id: s_VGg5dgQ1jB5371vnzpMdo4
          stance: supports
          locator: CBDB:637774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637774）
          source: &a1
            id: s_VGg5dgQ1jB5371vnzpMdo4
            source_type: api_record
            title: 中国历代人物传记资料库：王志遠（CBDB 637774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637774&o=json
            external_identifier: CBDB:637774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pzBDR69QYbQMgysMvUochF
        subject_person_id: p_e8CzP933ScAcMGL5dkqzB8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志遠，清人物。籍贯山陰，曾任司獄。（中国历代人物传记资料库 CBDB 637774）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2979aFaGwjNCZ7KROVd1_O
          claim_id: c_pzBDR69QYbQMgysMvUochF
          source_id: s_VGg5dgQ1jB5371vnzpMdo4
          stance: supports
          locator: CBDB:637774
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

# 王志遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志遠 | accepted |
| bio.summary | 王志遠，清人物。籍贯山陰，曾任司獄。（中国历代人物传记资料库 CBDB 637774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志遠（CBDB 637774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637774&o=json)
