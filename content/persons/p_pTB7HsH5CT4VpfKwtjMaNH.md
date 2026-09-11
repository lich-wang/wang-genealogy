---
schema: wang-person/v1
id: p_pTB7HsH5CT4VpfKwtjMaNH
status: active
merged_into: null
display_name: 王淵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wGgjzDxF3NBgRp38UKGrt6
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WVqduATDyQVW5u83Xay63h
          claim_id: c_wGgjzDxF3NBgRp38UKGrt6
          source_id: s_Tu1VwVeXjMEWveB3L1tAHt
          stance: supports
          locator: CBDB:280635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280635）
          source: &a1
            id: s_Tu1VwVeXjMEWveB3L1tAHt
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 280635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280635&o=json
            external_identifier: CBDB:280635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A4VHyLH5jX5AV9XY7sTvWg
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280635）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OZA4UzlIVv61RYHxrg59SQ
          claim_id: c_A4VHyLH5jX5AV9XY7sTvWg
          source_id: s_Tu1VwVeXjMEWveB3L1tAHt
          stance: supports
          locator: CBDB:280635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_W22EnvFTYQ5VDdR0QRQbog
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qc_tXU088C2SxJmc0HepQh
          claim_id: c_W22EnvFTYQ5VDdR0QRQbog
          source_id: s_Tu1VwVeXjMEWveB3L1tAHt
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pUwZmXJA98H12Cyv9Q6e5y
        status: active
        display_name: 王時柯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | 王淵，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pUwZmXJA98H12Cyv9Q6e5y | 王時柯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 280635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280635&o=json)
