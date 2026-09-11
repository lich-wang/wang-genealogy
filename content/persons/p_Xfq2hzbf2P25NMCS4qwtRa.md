---
schema: wang-person/v1
id: p_Xfq2hzbf2P25NMCS4qwtRa
status: active
merged_into: null
display_name: 王麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8wDZW7rmaMMBVDx3akLLg
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8eYQuLqXj7VwXzdGxg8cx8
          claim_id: c_E8wDZW7rmaMMBVDx3akLLg
          source_id: s_xXyMAt3S9zVZQv7gwo4gF1
          stance: supports
          locator: CBDB:210611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210611）
          source: &a1
            id: s_xXyMAt3S9zVZQv7gwo4gF1
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 210611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210611&o=json
            external_identifier: CBDB:210611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gat3qBV7MyzznQC4aBMNGq
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。隆慶五年進士，籍贯壽陽，曾任省祭官。（中国历代人物传记资料库 CBDB 210611）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__FRgHTBeEWge7ooQHxzCat
          claim_id: c_gat3qBV7MyzznQC4aBMNGq
          source_id: s_xXyMAt3S9zVZQv7gwo4gF1
          stance: supports
          locator: CBDB:210611
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OD8V2ER5KNqDRSh3_ENyIN
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TFTLmHU5uD9CZvePXzWQV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vrCeOayqxBRdvIUOH7ODHP
          claim_id: c_OD8V2ER5KNqDRSh3_ENyIN
          source_id: s_xXyMAt3S9zVZQv7gwo4gF1
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TFTLmHU5uD9CZvePXzWQV6
        status: active
        display_name: 王來聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。隆慶五年進士，籍贯壽陽，曾任省祭官。（中国历代人物传记资料库 CBDB 210611） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TFTLmHU5uD9CZvePXzWQV6 | 王來聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 210611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210611&o=json)
