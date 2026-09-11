---
schema: wang-person/v1
id: p_MB8Wi2HK7aBdXDCP3oVD5L
status: active
merged_into: null
display_name: 王拱極
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N9QDY53oneG4YMGCQJ31g2
        subject_person_id: p_MB8Wi2HK7aBdXDCP3oVD5L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3g8UBWRDU8vEmMBd9y5GLt
          claim_id: c_N9QDY53oneG4YMGCQJ31g2
          source_id: s_BMD24Nq5n5harDxbi3Uia7
          stance: supports
          locator: CBDB:318543
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318543）
          source: &a1
            id: s_BMD24Nq5n5harDxbi3Uia7
            source_type: api_record
            title: 中国历代人物传记资料库：王拱極（CBDB 318543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318543&o=json
            external_identifier: CBDB:318543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8AASu1k6QUtg7PXkGCQ99s
        subject_person_id: p_MB8Wi2HK7aBdXDCP3oVD5L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱極，明人物。嘉靖三十二年進士，籍贯定州。（中国历代人物传记资料库 CBDB 318543）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IekTApVxZ8od4alzWLwS5_
          claim_id: c_8AASu1k6QUtg7PXkGCQ99s
          source_id: s_BMD24Nq5n5harDxbi3Uia7
          stance: supports
          locator: CBDB:318543
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QLS7ARAOvNDj9mHpNRd482
        subject_person_id: p_MB8Wi2HK7aBdXDCP3oVD5L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qw3e91Q9f7u3SKikYg5LD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dn4BUkA4l7IS5wpDz0voa2
          claim_id: c_QLS7ARAOvNDj9mHpNRd482
          source_id: s_BMD24Nq5n5harDxbi3Uia7
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qw3e91Q9f7u3SKikYg5LD7
        status: active
        display_name: 王詠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王拱極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱極 | accepted |
| bio.summary | 王拱極，明人物。嘉靖三十二年進士，籍贯定州。（中国历代人物传记资料库 CBDB 318543） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Qw3e91Q9f7u3SKikYg5LD7 | 王詠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拱極（CBDB 318543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318543&o=json)
