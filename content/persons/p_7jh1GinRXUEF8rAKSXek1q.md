---
schema: wang-person/v1
id: p_7jh1GinRXUEF8rAKSXek1q
status: active
merged_into: null
display_name: 王吉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TfFYRyJv1vWdDiuX46QBCa
        subject_person_id: p_7jh1GinRXUEF8rAKSXek1q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oAhv5mifja7b8ECDi2QPCB
          claim_id: c_TfFYRyJv1vWdDiuX46QBCa
          source_id: s_RPFsSNCZu26mJoxSfnJXVm
          stance: supports
          locator: CBDB:59782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59782）
          source: &a1
            id: s_RPFsSNCZu26mJoxSfnJXVm
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 59782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59782&o=json
            external_identifier: CBDB:59782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XaM5egdfQLE5Wpc1aoUFLh
        subject_person_id: p_7jh1GinRXUEF8rAKSXek1q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jK57TGNtFDJSKTAD1Qwq6q
          claim_id: c_XaM5egdfQLE5Wpc1aoUFLh
          source_id: s_RPFsSNCZu26mJoxSfnJXVm
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
        id: c_PBmKjJLSMqmEgjas3ddbPn
        subject_person_id: p_7jh1GinRXUEF8rAKSXek1q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1881年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QGB7bueL4JcH35FzqPB2Gw
          claim_id: c_PBmKjJLSMqmEgjas3ddbPn
          source_id: s_RPFsSNCZu26mJoxSfnJXVm
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
        id: c_zKosHho4dxtcZEcSYkuFCc
        subject_person_id: p_7jh1GinRXUEF8rAKSXek1q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉（1825年—1881年），清人物。籍贯衡陽，曾任水師嚮導營營官、營守備。（中国历代人物传记资料库 CBDB 59782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P1x38xoJbiXP1iVn62pUbJ
          claim_id: c_zKosHho4dxtcZEcSYkuFCc
          source_id: s_RPFsSNCZu26mJoxSfnJXVm
          stance: supports
          locator: CBDB:59782
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_70u7lkbzy8YNhIg-_MSLrr
        subject_person_id: p_7jh1GinRXUEF8rAKSXek1q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qrM5XPhxMqjfReVt3nnWfY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_49pRrAjiPffu6jh-hFc-ci
          claim_id: c_70u7lkbzy8YNhIg-_MSLrr
          source_id: s_2CNc9muFjttaHERCkuy2Sj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），3087：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2CNc9muFjttaHERCkuy2Sj
            source_type: api_record
            title: 中国历代人物传记资料库：王崇元（CBDB 518914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=518914&o=json
            external_identifier: CBDB:518914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qrM5XPhxMqjfReVt3nnWfY
        status: active
        display_name: 王崇元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉 | accepted |
| birth.date | 1825年 | accepted |
| death.date | 1881年 | accepted |
| bio.summary | 王吉（1825年—1881年），清人物。籍贯衡陽，曾任水師嚮導營營官、營守備。（中国历代人物传记资料库 CBDB 59782） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qrM5XPhxMqjfReVt3nnWfY | 王崇元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇元（CBDB 518914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=518914&o=json)
- [中国历代人物传记资料库：王吉（CBDB 59782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59782&o=json)
