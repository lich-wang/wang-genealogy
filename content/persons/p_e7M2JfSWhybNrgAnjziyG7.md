---
schema: wang-person/v1
id: p_e7M2JfSWhybNrgAnjziyG7
status: active
merged_into: null
display_name: 王業法
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8qyX8gq54TZ38SgYr2rE6r
        subject_person_id: p_e7M2JfSWhybNrgAnjziyG7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aCEXrr2SYM26PjUGmeGnyo
          claim_id: c_8qyX8gq54TZ38SgYr2rE6r
          source_id: s_6ANYHJAEsStyoizT1q6U65
          stance: supports
          locator: CBDB:556671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556671）
          source: &a1
            id: s_6ANYHJAEsStyoizT1q6U65
            source_type: api_record
            title: 中国历代人物传记资料库：王業法（CBDB 556671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556671&o=json
            external_identifier: CBDB:556671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9LrQQ6eYrgB3sG97FbhkkY
        subject_person_id: p_e7M2JfSWhybNrgAnjziyG7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業法，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 556671）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h2iSAwJIoDTXVHcoRTIydI
          claim_id: c_9LrQQ6eYrgB3sG97FbhkkY
          source_id: s_6ANYHJAEsStyoizT1q6U65
          stance: supports
          locator: CBDB:556671
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_miT_GoNxLE-EUC6AMbr6NS
        subject_person_id: p_e7M2JfSWhybNrgAnjziyG7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jAaQjLBngKo7QnHQpgzu5Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UF9Nw3h71hlXAPc5j8CcIR
          claim_id: c_miT_GoNxLE-EUC6AMbr6NS
          source_id: s_6ANYHJAEsStyoizT1q6U65
          stance: supports
          locator: 紹興府志:八十卷，Igid=316291：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jAaQjLBngKo7QnHQpgzu5Z
        status: active
        display_name: 王燦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王業法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業法 | accepted |
| bio.summary | 王業法，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 556671） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jAaQjLBngKo7QnHQpgzu5Z | 王燦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王業法（CBDB 556671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556671&o=json)
