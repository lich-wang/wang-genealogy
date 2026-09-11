---
schema: wang-person/v1
id: p_nMT35SUBP5kHgrMqnHEGVw
status: active
merged_into: null
display_name: 王舜耕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lu8u5GUGLUDmVGEW12JYfq
        subject_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜耕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ynEeuQ426ez4znaVUr4NvB
          claim_id: c_Lu8u5GUGLUDmVGEW12JYfq
          source_id: s_ESkvBg3tPgbFqAg6HAZWai
          stance: supports
          locator: CBDB:126734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126734）
          source: &a1
            id: s_ESkvBg3tPgbFqAg6HAZWai
            source_type: api_record
            title: 中国历代人物传记资料库：王舜耕（CBDB 126734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126734&o=json
            external_identifier: CBDB:126734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2dLRHBAJzJDMp6br8Uc1FU
        subject_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1p2Yik15c1H294ccHTH1wg
          claim_id: c_2dLRHBAJzJDMp6br8Uc1FU
          source_id: s_ESkvBg3tPgbFqAg6HAZWai
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Lg4hh7AQZJS5gbPK1yuSnA
        subject_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1554年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tgmu2KAYFfFMWDpiZiWi8B
          claim_id: c_Lg4hh7AQZJS5gbPK1yuSnA
          source_id: s_ESkvBg3tPgbFqAg6HAZWai
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qFyMyXVeC47AdieYCmoP1G
        subject_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h39x9USEftGCYeDxyXMjjc
          claim_id: c_qFyMyXVeC47AdieYCmoP1G
          source_id: s_ESkvBg3tPgbFqAg6HAZWai
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vf8nQqGX2Y35GjzNxv3usf
        subject_person_id: p_2hjZsbenJ87Bo5wxCf861P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZBFmhgXee6lMViC030OH9j
          claim_id: c_vf8nQqGX2Y35GjzNxv3usf
          source_id: s_oL5csJSw2bgBCPoxoaRmFd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oL5csJSw2bgBCPoxoaRmFd
            source_type: api_record
            title: 中国历代人物传记资料库：王原吉（CBDB 279499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279499&o=json
            external_identifier: CBDB:279499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hjZsbenJ87Bo5wxCf861P
        status: active
        display_name: 王原吉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舜耕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜耕 | accepted |
| birth.date | 1484年 | accepted |
| death.date | 1554年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2hjZsbenJ87Bo5wxCf861P | 王原吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜耕（CBDB 126734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126734&o=json)
- [中国历代人物传记资料库：王原吉（CBDB 279499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279499&o=json)
