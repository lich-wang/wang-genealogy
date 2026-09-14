---
schema: wang-person/v1
id: p_GDxszfNM53cdWbNNzPoaoH
status: active
merged_into: null
display_name: 王世俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZQKSNzfG5FNfY3zLX9HA1
        subject_person_id: p_GDxszfNM53cdWbNNzPoaoH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n5jsXfLqYudK7BMiHd5YLr
          claim_id: c_FZQKSNzfG5FNfY3zLX9HA1
          source_id: s_MNEUSsrLGY9BPVxGTEwZTz
          stance: supports
          locator: CBDB:276008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276008）
          source: &a1
            id: s_MNEUSsrLGY9BPVxGTEwZTz
            source_type: api_record
            title: 中国历代人物传记资料库：王世俊（CBDB 276008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276008&o=json
            external_identifier: CBDB:276008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nDYRQohawAB5421DHAyG8j
        subject_person_id: p_GDxszfNM53cdWbNNzPoaoH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世俊，明人物。正德六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 276008）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZrnKLJoCi3s2ztVgmpO8Va
          claim_id: c_nDYRQohawAB5421DHAyG8j
          source_id: s_MNEUSsrLGY9BPVxGTEwZTz
          stance: supports
          locator: CBDB:276008
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e10_Ud-zpeovsFZ1g4ZTBE
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GDxszfNM53cdWbNNzPoaoH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5RVRThAfZNsCeBUxsMIQ8L
          claim_id: c_e10_Ud-zpeovsFZ1g4ZTBE
          source_id: s_KXksv0JM0JtI_DHM-JdDVL
          stance: supports
          locator: CBDB：兄弟 王世文（201664）之父／母 王鯨
          quotation: null
          interpretation_note: 由兄弟关系推断：王世俊 与 王世文 为同胞（CBDB 记「兄」），王世文 之父／母即 王世俊 之父／母。
          source:
            id: s_KXksv0JM0JtI_DHM-JdDVL
            source_type: api_record
            title: 中国历代人物传记资料库：王世俊（CBDB 276008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276008&o=json
            external_identifier: CBDB:276008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jj8dkQubs7taj8bUq4RoTF
        status: active
        display_name: 王鯨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SE3zD_uQ4KkgM2tgDfdu1O
        subject_person_id: p_GDxszfNM53cdWbNNzPoaoH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MSNfYht3O5mH1EigqXyR7q
          claim_id: c_SE3zD_uQ4KkgM2tgDfdu1O
          source_id: s_KXksv0JM0JtI_DHM-JdDVL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201664 王世文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KXksv0JM0JtI_DHM-JdDVL
            source_type: api_record
            title: 中国历代人物传记资料库：王世俊（CBDB 276008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276008&o=json
            external_identifier: CBDB:276008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HPi9LMn5Kw5811QG1EqGfq
        status: active
        display_name: 王世文
        merged_into_person_id: null
---

# 王世俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世俊 | accepted |
| bio.summary | 王世俊，明人物。正德六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 276008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jj8dkQubs7taj8bUq4RoTF | 王鯨 | accepted |
| other | p_HPi9LMn5Kw5811QG1EqGfq | 王世文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世俊（CBDB 276008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276008&o=json)
