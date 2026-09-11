---
schema: wang-person/v1
id: p_6K7Q5ESTtUvMABnWTJmfLL
status: active
merged_into: null
display_name: 王誾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4CEZtK3t5Gf5ypFz2trLZk
        subject_person_id: p_6K7Q5ESTtUvMABnWTJmfLL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6MW3fhFBki25eicDCHWXzg
          claim_id: c_4CEZtK3t5Gf5ypFz2trLZk
          source_id: s_Fm6mqkVaCEiYkuryq93EF4
          stance: supports
          locator: CBDB:254534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254534）
          source: &a1
            id: s_Fm6mqkVaCEiYkuryq93EF4
            source_type: api_record
            title: 中国历代人物传记资料库：王誾（CBDB 254534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254534&o=json
            external_identifier: CBDB:254534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1n1uDsBmeBN5pFqvhcNeg5
        subject_person_id: p_6K7Q5ESTtUvMABnWTJmfLL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誾，明人物。建文二年殿試進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 254534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F2PciUIRnxLn_XG6dIEeHg
          claim_id: c_1n1uDsBmeBN5pFqvhcNeg5
          source_id: s_Fm6mqkVaCEiYkuryq93EF4
          stance: supports
          locator: CBDB:254534
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

# 王誾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誾 | accepted |
| bio.summary | 王誾，明人物。建文二年殿試進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 254534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誾（CBDB 254534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254534&o=json)
