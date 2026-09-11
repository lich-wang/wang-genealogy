---
schema: wang-person/v1
id: p_W5G53hYc4kxcrcPiJ3Wvpw
status: active
merged_into: null
display_name: 王幹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m9peqBvUUjt9ngd1t4Jp5p
        subject_person_id: p_W5G53hYc4kxcrcPiJ3Wvpw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vr1Q6R9Y96Rh4bZcz4zXvN
          claim_id: c_m9peqBvUUjt9ngd1t4Jp5p
          source_id: s_jYcBs4UrajbQBnKMPrYvBJ
          stance: supports
          locator: CBDB:152084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152084）
          source: &a1
            id: s_jYcBs4UrajbQBnKMPrYvBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王幹（CBDB 152084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152084&o=json
            external_identifier: CBDB:152084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HCHh4fGCimdRYRjf2pU6GM
        subject_person_id: p_W5G53hYc4kxcrcPiJ3Wvpw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幹，唐人物。籍贯太原，身份为詩人。（中国历代人物传记资料库 CBDB 152084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w_dl4weKBjdUlc44uqvwqv
          claim_id: c_HCHh4fGCimdRYRjf2pU6GM
          source_id: s_jYcBs4UrajbQBnKMPrYvBJ
          stance: supports
          locator: CBDB:152084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MzniajTua3vCE5pE7wVLRq
        subject_person_id: p_W5G53hYc4kxcrcPiJ3Wvpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xfuuciWrW1oRJMYJWgyk2k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsTbkh_XpqdoPfIenkrqrw
          claim_id: c_MzniajTua3vCE5pE7wVLRq
          source_id: s_jYcBs4UrajbQBnKMPrYvBJ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 268：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xfuuciWrW1oRJMYJWgyk2k
        status: active
        display_name: 王晉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王幹 | accepted |
| bio.summary | 王幹，唐人物。籍贯太原，身份为詩人。（中国历代人物传记资料库 CBDB 152084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xfuuciWrW1oRJMYJWgyk2k | 王晉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王幹（CBDB 152084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152084&o=json)
