---
schema: wang-person/v1
id: p_65oe5qNLAocL9gfUCJ534m
status: active
merged_into: null
display_name: 王鵠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xpAYwchWPeoRs2FfDDDyNw
        subject_person_id: p_65oe5qNLAocL9gfUCJ534m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fQhbaABTDkKJE7ywYxW5fN
          claim_id: c_xpAYwchWPeoRs2FfDDDyNw
          source_id: s_n7gf1W4r3X8zh42Fk4goQr
          stance: supports
          locator: CBDB:71218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71218）
          source: &a1
            id: s_n7gf1W4r3X8zh42Fk4goQr
            source_type: api_record
            title: 中国历代人物传记资料库：王鵠（CBDB 71218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71218&o=json
            external_identifier: CBDB:71218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_W6AQqEeCmtAniNQ3YXFX7P
        subject_person_id: p_65oe5qNLAocL9gfUCJ534m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1807年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kYsi7F45HoBfHYSb7JhAoz
          claim_id: c_W6AQqEeCmtAniNQ3YXFX7P
          source_id: s_n7gf1W4r3X8zh42Fk4goQr
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
        id: c_V9t3kRAR482p9QLj9PBLgw
        subject_person_id: p_65oe5qNLAocL9gfUCJ534m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1876年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qDdGLaa7H4m2ga5ZkUFQsk
          claim_id: c_V9t3kRAR482p9QLj9PBLgw
          source_id: s_n7gf1W4r3X8zh42Fk4goQr
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
        id: c_zSCfNPrd1imcCwz3kTMuAP
        subject_person_id: p_65oe5qNLAocL9gfUCJ534m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGD4SmmdetS1vMd5SEk9CL
          claim_id: c_zSCfNPrd1imcCwz3kTMuAP
          source_id: s_n7gf1W4r3X8zh42Fk4goQr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王鵠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵠 | accepted |
| birth.date | 1807年 | accepted |
| death.date | 1876年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵠（CBDB 71218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71218&o=json)
