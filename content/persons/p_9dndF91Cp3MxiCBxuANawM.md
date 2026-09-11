---
schema: wang-person/v1
id: p_9dndF91Cp3MxiCBxuANawM
status: active
merged_into: null
display_name: 王才
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GCtBd43Pd75VJxcuM5n9KF
        subject_person_id: p_9dndF91Cp3MxiCBxuANawM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_83FjqYQE6uSd7Cx6yAT4rN
          claim_id: c_GCtBd43Pd75VJxcuM5n9KF
          source_id: s_mS2EJeBETQ4KMtHcLozP4C
          stance: supports
          locator: CBDB:313335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313335）
          source: &a1
            id: s_mS2EJeBETQ4KMtHcLozP4C
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 313335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313335&o=json
            external_identifier: CBDB:313335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HTTea3Uvj49PNoyQa1UUmf
        subject_person_id: p_9dndF91Cp3MxiCBxuANawM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才，明人物。嘉靖二十九年進士，曾任監察御史、提刑按察使司副使、中憲大夫。（中国历代人物传记资料库 CBDB 313335）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RAOakzpneU4b3mlCpgKgeD
          claim_id: c_HTTea3Uvj49PNoyQa1UUmf
          source_id: s_mS2EJeBETQ4KMtHcLozP4C
          stance: supports
          locator: CBDB:313335
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
  descendants:
    - claim:
        id: c_YmOXiY3wlD5uOjTj4Mvs4j
        subject_person_id: p_9dndF91Cp3MxiCBxuANawM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8cRfHrYm-i3y83u5h3uaJ
          claim_id: c_YmOXiY3wlD5uOjTj4Mvs4j
          source_id: s_mS2EJeBETQ4KMtHcLozP4C
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_emRFonnZuCJKKPb7oDivvy
        status: active
        display_name: 王道直
        merged_into_person_id: null
  other: []
---

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| bio.summary | 王才，明人物。嘉靖二十九年進士，曾任監察御史、提刑按察使司副使、中憲大夫。（中国历代人物传记资料库 CBDB 313335） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_emRFonnZuCJKKPb7oDivvy | 王道直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 313335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313335&o=json)
