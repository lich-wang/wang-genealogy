---
schema: wang-person/v1
id: p_QT6Hb1HzFf1A4bSvMqQdo3
status: active
merged_into: null
display_name: 王僧孺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gh6ZYS-SiakxBXndrQXs-U
        subject_person_id: p_QT6Hb1HzFf1A4bSvMqQdo3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧孺
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UuoOzNBZyyEFEpfzN5e8mp
          claim_id: c_gh6ZYS-SiakxBXndrQXs-U
          source_id: s_eC9XgPV1hTm19EF55IuxsY
          stance: supports
          locator: 梁書·卷三十三·列传第二十七：王僧孺字僧孺，東海郯人，魏衛將軍肅八世孫。曾祖雅，祖准。
          quotation: null
          interpretation_note: 依据正史列传原文补录（二十四史王姓列传核验）。
          source: &a1
            id: s_eC9XgPV1hTm19EF55IuxsY
            source_type: website
            title: 维基文库：梁書/卷33·王僧孺
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/梁書/卷33
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T14:53:55.495Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ctz7qmY0Twf2HyDjqZAeiK
        subject_person_id: p_QT6Hb1HzFf1A4bSvMqQdo3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧孺，東海郯人，魏卫将军王肃八世孙。南朝梁文学家，历兰陵太守、中书侍郎，著《百家谱》。曾祖王雅，祖王准。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5sOTuXYif8iy-KaDtT1RDp
          claim_id: c_ctz7qmY0Twf2HyDjqZAeiK
          source_id: s_eC9XgPV1hTm19EF55IuxsY
          stance: supports
          locator: 梁書·卷三十三·列传第二十七：王僧孺字僧孺，東海郯人，魏衛將軍肅八世孫。曾祖雅，祖准。
          quotation: null
          interpretation_note: 依据正史列传原文补录（二十四史王姓列传核验）。
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
  descendants:
    - claim:
        id: c_0Da-OQgiWDBGr0lW-50Tbf
        subject_person_id: p_ZVzYqdMQdELMX4RRwgGKXs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QT6Hb1HzFf1A4bSvMqQdo3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XA4J851CBxQZWJ9FSqOaK1
          claim_id: c_0Da-OQgiWDBGr0lW-50Tbf
          source_id: s_eC9XgPV1hTm19EF55IuxsY
          stance: supports
          locator: 梁書·卷三十三·王僧孺傳：曾祖雅，晉左光祿大夫。祖准，宋司徒左長史。
          quotation: null
          interpretation_note: 王准为王僧孺之祖父（東海王氏），依《梁书·王僧孺传》补链。
          source:
            id: s_eC9XgPV1hTm19EF55IuxsY
            source_type: website
            title: 维基文库：梁書·卷三十三·王僧孺傳
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/梁書/卷33
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T00:28:01.027Z
            metadata_json: null
      object_person:
        id: p_ZVzYqdMQdELMX4RRwgGKXs
        status: active
        display_name: 王准
        merged_into_person_id: null
  other: []
---

# 王僧孺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僧孺 | accepted |
| bio.summary | 王僧孺，東海郯人，魏卫将军王肃八世孙。南朝梁文学家，历兰陵太守、中书侍郎，著《百家谱》。曾祖王雅，祖王准。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ZVzYqdMQdELMX4RRwgGKXs | 王准 | accepted |

## 外部来源

- [维基文库：梁書·卷三十三·王僧孺傳](https://zh.wikisource.org/wiki/梁書/卷33)
