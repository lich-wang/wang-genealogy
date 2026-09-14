---
schema: wang-person/v1
id: p_niw5uJS3zvXwNh3yWH2M5Z
status: active
merged_into: null
display_name: 王彝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cj6pK42xUXnNSDNH2TUEH1
        subject_person_id: p_niw5uJS3zvXwNh3yWH2M5Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KSyeYi2UrsYCPHd755jPhg
          claim_id: c_Cj6pK42xUXnNSDNH2TUEH1
          source_id: s_JrJLcDyg2W8xMRoYZ8Ce1A
          stance: supports
          locator: CBDB:295383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295383）
          source: &a1
            id: s_JrJLcDyg2W8xMRoYZ8Ce1A
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 295383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295383&o=json
            external_identifier: CBDB:295383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.491Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iLm19Tk2KSMJvi9yPbvG1q
        subject_person_id: p_niw5uJS3zvXwNh3yWH2M5Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝，明人物。嘉靖十四年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 295383）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ea57bVrkluNf318nAucSBe
          claim_id: c_iLm19Tk2KSMJvi9yPbvG1q
          source_id: s_JrJLcDyg2W8xMRoYZ8Ce1A
          stance: supports
          locator: CBDB:295383
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lVKoLQyxe8bc-2EglJDr6o
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_niw5uJS3zvXwNh3yWH2M5Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Zd5MPT17t1YvfIEPMQx7t
          claim_id: c_lVKoLQyxe8bc-2EglJDr6o
          source_id: s_bRsHMcKELtvcB8sbykpvR4
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王彝 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王彝 之父／母。
          source:
            id: s_bRsHMcKELtvcB8sbykpvR4
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 295383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295383&o=json
            external_identifier: CBDB:295383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FqMa4M2DAduvq9gtDKyST2
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Pp8JiDlvxdW3kgBgK2sVM9
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_niw5uJS3zvXwNh3yWH2M5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I-t3mcIo2jvPK1RldIgIUf
          claim_id: c_Pp8JiDlvxdW3kgBgK2sVM9
          source_id: s_bRsHMcKELtvcB8sbykpvR4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bRsHMcKELtvcB8sbykpvR4
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 295383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295383&o=json
            external_identifier: CBDB:295383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2BUKVfjLttuBq79dFrNbRz
        status: active
        display_name: 王崇
        merged_into_person_id: null
---

# 王彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝 | accepted |
| bio.summary | 王彝，明人物。嘉靖十四年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 295383） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FqMa4M2DAduvq9gtDKyST2 | 王釗 | accepted |
| other | p_2BUKVfjLttuBq79dFrNbRz | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彝（CBDB 295383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295383&o=json)
