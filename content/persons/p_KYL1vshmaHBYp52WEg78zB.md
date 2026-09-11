---
schema: wang-person/v1
id: p_KYL1vshmaHBYp52WEg78zB
status: active
merged_into: null
display_name: 王庠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zje7SStwSZj1jNrUQXs8u4
        subject_person_id: p_KYL1vshmaHBYp52WEg78zB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mk33tqsu4HLKcC18nLHeYq
          claim_id: c_Zje7SStwSZj1jNrUQXs8u4
          source_id: s_eqtEjxVYFKRe2FABZVzvKo
          stance: supports
          locator: CBDB:7375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7375）
          source: &a1
            id: s_eqtEjxVYFKRe2FABZVzvKo
            source_type: api_record
            title: 中国历代人物传记资料库：王庠（CBDB 7375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7375&o=json
            external_identifier: CBDB:7375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tD7YEAGp1th4SZQQ5LiZZU
        subject_person_id: p_KYL1vshmaHBYp52WEg78zB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1071年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QgTzk5CALvnsTfYZCoBqji
          claim_id: c_tD7YEAGp1th4SZQQ5LiZZU
          source_id: s_eqtEjxVYFKRe2FABZVzvKo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3vCN4S25yd2GW7TB55ExaZ
        subject_person_id: p_KYL1vshmaHBYp52WEg78zB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庠（生于1071年），宋人物。籍贯榮德，身份为拒絕出仕、孝子/孝女，入仕進士(八行科)。（中国历代人物传记资料库 CBDB 7375）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hweEJqxcDLZz98NEnoAm9z
          claim_id: c_3vCN4S25yd2GW7TB55ExaZ
          source_id: s_eqtEjxVYFKRe2FABZVzvKo
          stance: supports
          locator: CBDB:7375
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

# 王庠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庠 | accepted |
| birth.date | 1071年 | accepted |
| bio.summary | 王庠（生于1071年），宋人物。籍贯榮德，身份为拒絕出仕、孝子/孝女，入仕進士(八行科)。（中国历代人物传记资料库 CBDB 7375） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庠（CBDB 7375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7375&o=json)
