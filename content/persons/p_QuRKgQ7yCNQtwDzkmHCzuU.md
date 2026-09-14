---
schema: wang-person/v1
id: p_QuRKgQ7yCNQtwDzkmHCzuU
status: active
merged_into: null
display_name: 王思明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MvGeG6dn9GvKah2jj7TZfS
        subject_person_id: p_QuRKgQ7yCNQtwDzkmHCzuU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eWwrzBAK1AYJJbZKTx4c1u
          claim_id: c_MvGeG6dn9GvKah2jj7TZfS
          source_id: s_mT7qtFcQfgFdxHj933ooKm
          stance: supports
          locator: CBDB:237445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237445）
          source: &a1
            id: s_mT7qtFcQfgFdxHj933ooKm
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 237445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json
            external_identifier: CBDB:237445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZjj49sjJt8H7BhhmpV9Ly
        subject_person_id: p_QuRKgQ7yCNQtwDzkmHCzuU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思明，明人物。正統四年進士，籍贯上蔡。（中国历代人物传记资料库 CBDB 237445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rh76UVGM8vZ1ifhcjcbQBX
          claim_id: c_PZjj49sjJt8H7BhhmpV9Ly
          source_id: s_mT7qtFcQfgFdxHj933ooKm
          stance: supports
          locator: CBDB:237445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0vOeynkBLjVOO_dLIanBbw
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QuRKgQ7yCNQtwDzkmHCzuU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xykOo6_ClQYx3ySFCDQlby
          claim_id: c_0vOeynkBLjVOO_dLIanBbw
          source_id: s_Q9gJljrUfmMvQDIsi3WNG2
          stance: supports
          locator: CBDB：兄弟 王信（67212）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王思明 与 王信 为同胞（CBDB 记「弟」），王信 之父／母即 王思明 之父／母。
          source:
            id: s_Q9gJljrUfmMvQDIsi3WNG2
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 237445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json
            external_identifier: CBDB:237445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WxESaqfXoRne3LVPqRgpV4
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3UF_RcteK_x6Xd8k4Cuumn
        subject_person_id: p_QuRKgQ7yCNQtwDzkmHCzuU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wg0jdf8D5fXF9KZnDlY-ID
          claim_id: c_3UF_RcteK_x6Xd8k4Cuumn
          source_id: s_Q9gJljrUfmMvQDIsi3WNG2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67212 王信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q9gJljrUfmMvQDIsi3WNG2
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 237445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json
            external_identifier: CBDB:237445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dHV6AgtpcgRLpJFycLHnbd
        status: active
        display_name: 王信
        merged_into_person_id: null
---

# 王思明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思明 | accepted |
| bio.summary | 王思明，明人物。正統四年進士，籍贯上蔡。（中国历代人物传记资料库 CBDB 237445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WxESaqfXoRne3LVPqRgpV4 | 王珪 | accepted |
| other | p_dHV6AgtpcgRLpJFycLHnbd | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思明（CBDB 237445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json)
