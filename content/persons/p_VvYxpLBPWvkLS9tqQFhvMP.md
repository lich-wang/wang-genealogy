---
schema: wang-person/v1
id: p_VvYxpLBPWvkLS9tqQFhvMP
status: active
merged_into: null
display_name: 王機
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zIhjFnRmxp8TqZVzVD7cTU
        subject_person_id: p_VvYxpLBPWvkLS9tqQFhvMP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機，三國魏人，東郡太守，西晉王沈之父（《晉書·卷三十九·王沈傳》：父機，魏東郡太守）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_oo3toQzaFHFxSbxFaS5s8I
          claim_id: c_zIhjFnRmxp8TqZVzVD7cTU
          source_id: s_MoMpZ7_F5ySFkOg08E0nXt
          stance: supports
          locator: 晉書/卷039·王機
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_MoMpZ7_F5ySFkOg08E0nXt
            source_type: website
            title: 维基文库：晉書/卷039·王機
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/晉書/卷039
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wywn6tcPjHiswaqeQrsoX9
        subject_person_id: p_VvYxpLBPWvkLS9tqQFhvMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_37UMNymMUSq1AgWPNp7a3o
          claim_id: c_Wywn6tcPjHiswaqeQrsoX9
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: Q120698344
          quotation: null
          interpretation_note: null
          source:
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hQt4Zgy1P84gVcEK8qGQN5
        subject_person_id: p_p4yVv5snR3haDgncmUbKKM
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_VvYxpLBPWvkLS9tqQFhvMP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9aFu6ffyZKe2LrgpYGQ2sC
          claim_id: c_hQt4Zgy1P84gVcEK8qGQN5
          source_id: s_rbiyKYtLGkkwm2d3m2ne5d
          stance: supports
          locator: 条文：王柔子
          quotation: 王機，王柔子，曹魏東郡太守。
          interpretation_note: null
          source:
            id: s_rbiyKYtLGkkwm2d3m2ne5d
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:50.540Z
            metadata_json: null
        - id: cs_cFKdC9gNimN1uaQxoLn33v
          claim_id: c_hQt4Zgy1P84gVcEK8qGQN5
          source_id: s_ia7UywJVEB9bkmTJ93pz7K
          stance: supports
          locator: 条文：王柔子
          quotation: 王機，王柔子，曹魏東郡太守。
          interpretation_note: null
          source:
            id: s_ia7UywJVEB9bkmTJ93pz7K
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:31.288Z
            metadata_json: null
      object_person:
        id: p_p4yVv5snR3haDgncmUbKKM
        status: active
        display_name: 王柔
        merged_into_person_id: null
  children:
    - claim:
        id: c_8LtY5FzNjA6zckc2kwXkct
        subject_person_id: p_VvYxpLBPWvkLS9tqQFhvMP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_37UsZUR2e25vv1gQTCqpjG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NsTYcqtFj1Yk4rnVPr8xwE
          claim_id: c_8LtY5FzNjA6zckc2kwXkct
          source_id: s_reaTfWx18D3nBWzMLvY2eV
          stance: supports
          locator: 《晋书》王沈传
          quotation: 王沉字處道，太原晉陽人也。祖柔……父機，魏東郡太守。
          interpretation_note: null
          source:
            id: s_reaTfWx18D3nBWzMLvY2eV
            source_type: book
            title: 识典古籍：《晋书》王沈传
            creator: null
            publisher: 识典古籍
            published_at_text: null
            canonical_url: https://www.shidianguji.com/book/LS0005/chapter/LS0005_667
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:15:01.384Z
            metadata_json: null
      object_person:
        id: p_37UsZUR2e25vv1gQTCqpjG
        status: active
        display_name: 王沈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王機，三國魏人，東郡太守，西晉王沈之父（《晉書·卷三十九·王沈傳》：父機，魏東郡太守）。 | accepted |
| name.primary | 王機 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p4yVv5snR3haDgncmUbKKM | 王柔 | accepted |
| children | p_37UsZUR2e25vv1gQTCqpjG | 王沈 | accepted |

## 外部来源

- [识典古籍：《晋书》王沈传](https://www.shidianguji.com/book/LS0005/chapter/LS0005_667)
- [维基文库：晉書/卷039·王機](https://zh.wikisource.org/wiki/晉書/卷039)
- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
