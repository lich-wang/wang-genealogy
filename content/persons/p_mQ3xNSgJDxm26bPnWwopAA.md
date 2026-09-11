---
schema: wang-person/v1
id: p_mQ3xNSgJDxm26bPnWwopAA
status: active
merged_into: null
display_name: 竇氏
revision: 1
cbdb_id: 144831
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C2SXIIKNiqObnXvtrqBjKf
        subject_person_id: p_mQ3xNSgJDxm26bPnWwopAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 竇氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RNzAGtxVZMyeJBXzuFOgaP
          claim_id: c_C2SXIIKNiqObnXvtrqBjKf
          source_id: s_fQHjjC9rRLeyrIhrmKB_g6
          stance: supports
          locator: CBDB:144831
          quotation: null
          interpretation_note: CBDB 明确记录的王尚準配偶
          source: &a1
            id: s_fQHjjC9rRLeyrIhrmKB_g6
            source_type: api_record
            title: 中国历代人物传记资料库：竇氏(竇雲昇女)（CBDB 144831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144831&o=json
            external_identifier: CBDB:144831
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
        id: c_6mam1XgDaMfakhaoIxvOpj
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mQ3xNSgJDxm26bPnWwopAA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nW_r-o6YOzsQW2sa8Y6gzC
          claim_id: c_6mam1XgDaMfakhaoIxvOpj
          source_id: s_fQHjjC9rRLeyrIhrmKB_g6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PaQ5yP1i6ggstQ3reseLJo
        status: active
        display_name: 王尚準
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 竇氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 竇氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PaQ5yP1i6ggstQ3reseLJo | 王尚準 | accepted |

## 外部来源

- [中国历代人物传记资料库：竇氏(竇雲昇女)（CBDB 144831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144831&o=json)
