---
schema: wang-person/v1
id: p_SbwASiY46QeAUyAy9ypLwQ
status: active
merged_into: null
display_name: 王來問
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_53MoEDWjS92c5qU9on8XNT
        subject_person_id: p_SbwASiY46QeAUyAy9ypLwQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mkNnporawTtM9xLmj7xD6b
          claim_id: c_53MoEDWjS92c5qU9on8XNT
          source_id: s_nf23YLZUH8WV8ZKrvQ2vxC
          stance: supports
          locator: CBDB:335622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335622）
          source: &a1
            id: s_nf23YLZUH8WV8ZKrvQ2vxC
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 335622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335622&o=json
            external_identifier: CBDB:335622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GfbH64Ns1r3N6kdpW6WAzJ
        subject_person_id: p_SbwASiY46QeAUyAy9ypLwQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來問，明人物。隆慶二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 335622）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dP6I1_UCrd6C_g5cH-i2EM
          claim_id: c_GfbH64Ns1r3N6kdpW6WAzJ
          source_id: s_nf23YLZUH8WV8ZKrvQ2vxC
          stance: supports
          locator: CBDB:335622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_77sQUvvVgLnfuTQ6rX0WGv
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SbwASiY46QeAUyAy9ypLwQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WEi94ARHJtLowJec3apHXZ
          claim_id: c_77sQUvvVgLnfuTQ6rX0WGv
          source_id: s_sYiWqfWQfYKc0lUi7-udqR
          stance: supports
          locator: CBDB：兄弟 王來召（205587）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王來問 与 王來召 为同胞（CBDB 记「兄」），王來召 之父／母即 王來問 之父／母。
          source:
            id: s_sYiWqfWQfYKc0lUi7-udqR
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 335622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335622&o=json
            external_identifier: CBDB:335622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hZ7fSswDmKyd393yXgK7dU
        status: active
        display_name: 王俊民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9WLRXCjqhc7OGshIE07be6
        subject_person_id: p_SbwASiY46QeAUyAy9ypLwQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aB0RWIfiP8Z0wqSlZWwm7z
          claim_id: c_9WLRXCjqhc7OGshIE07be6
          source_id: s_sYiWqfWQfYKc0lUi7-udqR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205587 王來召）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sYiWqfWQfYKc0lUi7-udqR
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 335622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335622&o=json
            external_identifier: CBDB:335622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mJFG2VmWYuWZQLFEyB56Dh
        status: active
        display_name: 王來召
        merged_into_person_id: null
---

# 王來問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來問 | accepted |
| bio.summary | 王來問，明人物。隆慶二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 335622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hZ7fSswDmKyd393yXgK7dU | 王俊民 | accepted |
| other | p_mJFG2VmWYuWZQLFEyB56Dh | 王來召 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來問（CBDB 335622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335622&o=json)
