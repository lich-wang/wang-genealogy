---
schema: wang-person/v1
id: p_tPb4jnJNyBNoZsGAFq5vQF
status: active
merged_into: null
display_name: 王琚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_77i3rML1N6Gs2eH2SMGfBy
        subject_person_id: p_tPb4jnJNyBNoZsGAFq5vQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VUCoBcgHNajSZ7oioRPHEz
          claim_id: c_77i3rML1N6Gs2eH2SMGfBy
          source_id: s_pa24n4FbApoQbP4Zw5Qu8m
          stance: supports
          locator: CBDB:335484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335484）
          source: &a1
            id: s_pa24n4FbApoQbP4Zw5Qu8m
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 335484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335484&o=json
            external_identifier: CBDB:335484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6dG2cCsrSVMGxdjBfUJmCP
        subject_person_id: p_tPb4jnJNyBNoZsGAFq5vQF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 335484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_azsXk21_TEPd4GEq_b-j32
          claim_id: c_6dG2cCsrSVMGxdjBfUJmCP
          source_id: s_pa24n4FbApoQbP4Zw5Qu8m
          stance: supports
          locator: CBDB:335484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3GqZSBsNbeSINcgXiHh1AW
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tPb4jnJNyBNoZsGAFq5vQF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_le8wbDOYNZOdUhO3ylrFAU
          claim_id: c_3GqZSBsNbeSINcgXiHh1AW
          source_id: s_JJRe6iQ2FN06a5BJDkIFS4
          stance: supports
          locator: CBDB：兄弟 王用汲（126494）之父／母 王孫
          quotation: null
          interpretation_note: 由兄弟关系推断：王琚 与 王用汲 为同胞（CBDB 记「兄」），王用汲 之父／母即 王琚 之父／母。
          source:
            id: s_JJRe6iQ2FN06a5BJDkIFS4
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 335484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335484&o=json
            external_identifier: CBDB:335484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wFTS9Dws5nhZvJ8pXQTGVc
        status: active
        display_name: 王孫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vCOHd9Rtz_4XQdFcc5-dyu
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tPb4jnJNyBNoZsGAFq5vQF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uvr89W5jNDm3W1pRtSzlnr
          claim_id: c_vCOHd9Rtz_4XQdFcc5-dyu
          source_id: s_JJRe6iQ2FN06a5BJDkIFS4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JJRe6iQ2FN06a5BJDkIFS4
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 335484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335484&o=json
            external_identifier: CBDB:335484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BzK6A2uXvZyrjjgruuh1Qh
        status: active
        display_name: 王用汲
        merged_into_person_id: null
---

# 王琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琚 | accepted |
| bio.summary | 王琚，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 335484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wFTS9Dws5nhZvJ8pXQTGVc | 王孫 | accepted |
| other | p_BzK6A2uXvZyrjjgruuh1Qh | 王用汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琚（CBDB 335484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335484&o=json)
