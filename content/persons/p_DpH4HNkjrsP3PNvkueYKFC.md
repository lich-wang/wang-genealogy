---
schema: wang-person/v1
id: p_DpH4HNkjrsP3PNvkueYKFC
status: active
merged_into: null
display_name: 王同道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ck8wPskPiAHQFzxNXSq21F
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pk1V8PMnengarf7gK7Czin
          claim_id: c_ck8wPskPiAHQFzxNXSq21F
          source_id: s_prYwPBgaZQx5Jf7B7N4EJ9
          stance: supports
          locator: CBDB:205031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205031）
          source: &a1
            id: s_prYwPBgaZQx5Jf7B7N4EJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王同道（CBDB 205031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205031&o=json
            external_identifier: CBDB:205031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1G51bBGpXh1NEEATJrD45C
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p9GPEiimYC9kTteYJTUPtN
          claim_id: c_1G51bBGpXh1NEEATJrD45C
          source_id: s_prYwPBgaZQx5Jf7B7N4EJ9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rKecNjg5DNdwbKBZz2GBBM
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
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
        - id: cs_qNBYZJGXSvmKQNLbZoqk1C
          claim_id: c_rKecNjg5DNdwbKBZz2GBBM
          source_id: s_prYwPBgaZQx5Jf7B7N4EJ9
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
        id: c_96VurjaNiZ5t0ttTLDfwRd
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WmXfH_TnTTPLLNW30SpiJp
          claim_id: c_96VurjaNiZ5t0ttTLDfwRd
          source_id: s_o4BwLyitFjcAFS4veow24B
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o4BwLyitFjcAFS4veow24B
            source_type: api_record
            title: 中国历代人物传记资料库：王廷槐（CBDB 327381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327381&o=json
            external_identifier: CBDB:327381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A2Zw5HgNNKQfknjQ8rX9z5
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王同道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同道 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A2Zw5HgNNKQfknjQ8rX9z5 | 王廷槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷槐（CBDB 327381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327381&o=json)
- [中国历代人物传记资料库：王同道（CBDB 205031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205031&o=json)
