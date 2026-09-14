---
schema: wang-person/v1
id: p_oTjwFW82cDAsgh765nM8QW
status: active
merged_into: null
display_name: 王昭純
cbdb_id: 260345
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zsXGYE6rfYN2tTCDnxv2Va
        subject_person_id: p_oTjwFW82cDAsgh765nM8QW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭純，明人物。成化二十三年進士，籍贯榮昌。（中国历代人物传记资料库 CBDB 260345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RWFkNrs16ZX8l2GhOlHUca
          claim_id: c_zsXGYE6rfYN2tTCDnxv2Va
          source_id: s_EioWuQ5fke6Nuvj648jM1Q
          stance: supports
          locator: CBDB:260345
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EioWuQ5fke6Nuvj648jM1Q
            source_type: api_record
            title: 中国历代人物传记资料库：王昭純（CBDB 260345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260345&o=json
            external_identifier: CBDB:260345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JAhMYVL1qjALw3ffmpt9j8
        subject_person_id: p_oTjwFW82cDAsgh765nM8QW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_55oBWtGiUC8zwDHs1inePd
          claim_id: c_JAhMYVL1qjALw3ffmpt9j8
          source_id: s_EioWuQ5fke6Nuvj648jM1Q
          stance: supports
          locator: CBDB:260345
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oRc6UUEPTnvg8wPaw0OXjB
        subject_person_id: p_qXXWkVN4cPuCaB8LQ1BWBn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oTjwFW82cDAsgh765nM8QW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pCNhbubaC203V1PHvhnV6P
          claim_id: c_oRc6UUEPTnvg8wPaw0OXjB
          source_id: s_yXmPAzbFygS8k5NfPKPiur
          stance: supports
          locator: CBDB：兄弟 王貫（200606）之父／母 王玘
          quotation: null
          interpretation_note: 由兄弟关系推断：王昭純 与 王貫 为同胞（CBDB 记「兄」），王貫 之父／母即 王昭純 之父／母。
          source:
            id: s_yXmPAzbFygS8k5NfPKPiur
            source_type: api_record
            title: 中国历代人物传记资料库：王昭純（CBDB 260345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260345&o=json
            external_identifier: CBDB:260345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qXXWkVN4cPuCaB8LQ1BWBn
        status: active
        display_name: 王玘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DpZrQixenL9CtlJOlUxkYx
        subject_person_id: p_oTjwFW82cDAsgh765nM8QW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uBDJjG7sJNJM9ZmFoir4HY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89oFGRiINw6c9JOg0fe1NH
          claim_id: c_DpZrQixenL9CtlJOlUxkYx
          source_id: s_yXmPAzbFygS8k5NfPKPiur
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200606 王貫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yXmPAzbFygS8k5NfPKPiur
            source_type: api_record
            title: 中国历代人物传记资料库：王昭純（CBDB 260345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260345&o=json
            external_identifier: CBDB:260345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uBDJjG7sJNJM9ZmFoir4HY
        status: active
        display_name: 王貫
        merged_into_person_id: null
---

# 王昭純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昭純，明人物。成化二十三年進士，籍贯榮昌。（中国历代人物传记资料库 CBDB 260345） | accepted |
| name.primary | 王昭純 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qXXWkVN4cPuCaB8LQ1BWBn | 王玘 | accepted |
| other | p_uBDJjG7sJNJM9ZmFoir4HY | 王貫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昭純（CBDB 260345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260345&o=json)
