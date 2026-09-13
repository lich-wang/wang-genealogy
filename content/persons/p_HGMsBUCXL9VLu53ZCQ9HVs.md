---
schema: wang-person/v1
id: p_HGMsBUCXL9VLu53ZCQ9HVs
status: active
merged_into: null
display_name: 王恭玮
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rDgNDAK7KcE0uOY9DLSTwJ
        subject_person_id: p_HGMsBUCXL9VLu53ZCQ9HVs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭玮（1920年—1942年4月17日†），中华民国大陆时期外交官，外交家王正廷第六子。因抗日战争殉职而闻名。二战中国“抗日外交九烈士”之一。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GkBkLgS_m48l3cZyjQAuzC
          claim_id: c_rDgNDAK7KcE0uOY9DLSTwJ
          source_id: s_u-xDCgx5GIalhWJ4pu7M1V
          stance: supports
          locator: 导言
          quotation: 王恭玮（1920年—1942年4月17日†），中华民国大陆时期外
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_u-xDCgx5GIalhWJ4pu7M1V
            source_type: website
            title: 中文维基百科：王恭玮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E7%8E%AE
            external_identifier: Q18654595
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qcoGChDZHSev7kwM8EyJo4
        subject_person_id: p_HGMsBUCXL9VLu53ZCQ9HVs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭玮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yVpgxbGcZeSiBpnt7Cny6A
          claim_id: c_qcoGChDZHSev7kwM8EyJo4
          source_id: s_GhqQyCpS37UyGohQP48oKt
          stance: supports
          locator: Q18654595
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_GhqQyCpS37UyGohQP48oKt
            source_type: api_record
            title: 维基数据：王恭玮（Q18654595）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18654595
            external_identifier: Q18654595
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E7%8E%AE
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UNLWF9m1vfN6Ld8HrJuAEZ
        subject_person_id: p_HGMsBUCXL9VLu53ZCQ9HVs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1920年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mr1T7Mo7nc2DzniBR8AEC3
          claim_id: c_UNLWF9m1vfN6Ld8HrJuAEZ
          source_id: s_GhqQyCpS37UyGohQP48oKt
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tE5M2szMQqvs7habCjDhTK
        subject_person_id: p_HGMsBUCXL9VLu53ZCQ9HVs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1942年4月17日
            calendar_note: 维基数据 P570 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4j1BEGaKKxhZQsZLktySfA
          claim_id: c_tE5M2szMQqvs7habCjDhTK
          source_id: s_GhqQyCpS37UyGohQP48oKt
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8fRZ7TAscsPLu7FK5B6CF2
        subject_person_id: p_RM3cVqPfxibJdrESfP6QB2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HGMsBUCXL9VLu53ZCQ9HVs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5AdEFN5kPYAmS2ki2wKb5W
          claim_id: c_8fRZ7TAscsPLu7FK5B6CF2
          source_id: s_EGoLNKkwS4h1c5PFs6DWdp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_EGoLNKkwS4h1c5PFs6DWdp
            source_type: api_record
            title: 维基数据：王正廷（Q6127766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q6127766
            external_identifier: Q6127766
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:03.014Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E5%BB%B7
        - id: cs_HxJ77riw4zTrt9DAcptiGq
          claim_id: c_8fRZ7TAscsPLu7FK5B6CF2
          source_id: s_GhqQyCpS37UyGohQP48oKt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_RM3cVqPfxibJdrESfP6QB2
        status: active
        display_name: 王正廷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恭玮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恭玮（1920年—1942年4月17日†），中华民国大陆时期外交官，外交家王正廷第六子。因抗日战争殉职而闻名。二战中国“抗日外交九烈士”之一。 | accepted |
| name.primary | 王恭玮 | accepted |
| birth.date | 1920年 | accepted |
| death.date | 1942年4月17日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RM3cVqPfxibJdrESfP6QB2 | 王正廷 | accepted |

## 外部来源

- [维基数据：王恭玮（Q18654595）](https://www.wikidata.org/wiki/Q18654595)
- [维基数据：王正廷（Q6127766）](https://www.wikidata.org/wiki/Q6127766)
- [中文维基百科：王恭玮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E7%8E%AE)
