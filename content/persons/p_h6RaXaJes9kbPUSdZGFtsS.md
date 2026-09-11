---
schema: wang-person/v1
id: p_h6RaXaJes9kbPUSdZGFtsS
status: active
merged_into: null
display_name: 元載
revision: 1
cbdb_id: 32672
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_82EoEdpmKLslBS9-QFf0e_
        subject_person_id: p_h6RaXaJes9kbPUSdZGFtsS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 元載
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yHOHwyuzbzs3OeupbpD-pm
          claim_id: c_82EoEdpmKLslBS9-QFf0e_
          source_id: s_1ubvgbR7tr_0853w4keVls
          stance: supports
          locator: CBDB:32672
          quotation: null
          interpretation_note: CBDB 明确记录的王韞秀配偶
          source: &a1
            id: s_1ubvgbR7tr_0853w4keVls
            source_type: api_record
            title: 中国历代人物传记资料库：元載（CBDB 32672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32672&o=json
            external_identifier: CBDB:32672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HCvM3RBShwNIa2Nw-JDwQU
        subject_person_id: p_TNXcJRpWMCf1LY1q3MSNQA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_h6RaXaJes9kbPUSdZGFtsS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0nGKM1jy2Nia2d2_TYY1CL
          claim_id: c_HCvM3RBShwNIa2Nw-JDwQU
          source_id: s_1ubvgbR7tr_0853w4keVls
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00233：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TNXcJRpWMCf1LY1q3MSNQA
        status: active
        display_name: 王韞秀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 元載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 元載 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_TNXcJRpWMCf1LY1q3MSNQA | 王韞秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：元載（CBDB 32672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32672&o=json)
