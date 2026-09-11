---
schema: wang-person/v1
id: p_nghrgcnTsopoL6tSxnmf9V
status: active
merged_into: null
display_name: 王如綸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bC4usKM55ES5uE3hhsSbZL
        subject_person_id: p_nghrgcnTsopoL6tSxnmf9V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x775NF4F6C3CTPBpRC6Jxg
          claim_id: c_bC4usKM55ES5uE3hhsSbZL
          source_id: s_oGfiTBF7DRrW3nKn7sYQLK
          stance: supports
          locator: CBDB:204072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204072）
          source: &a1
            id: s_oGfiTBF7DRrW3nKn7sYQLK
            source_type: api_record
            title: 中国历代人物传记资料库：王如綸（CBDB 204072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204072&o=json
            external_identifier: CBDB:204072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H6jtwcAAjTrjPiNAsJYwGD
        subject_person_id: p_nghrgcnTsopoL6tSxnmf9V
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y38i3Uy3KAxCBv8XyJiqJ1
          claim_id: c_H6jtwcAAjTrjPiNAsJYwGD
          source_id: s_oGfiTBF7DRrW3nKn7sYQLK
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
        id: c_QXCx6WhTpGZHCAB5zNXFM7
        subject_person_id: p_nghrgcnTsopoL6tSxnmf9V
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
        - id: cs_jEZjGJ8MGLA4hX1d67zyK1
          claim_id: c_QXCx6WhTpGZHCAB5zNXFM7
          source_id: s_oGfiTBF7DRrW3nKn7sYQLK
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
        id: c_Z2xJs7LItXlJ_ehUiq8G1F
        subject_person_id: p_3HLf6K3P47HGQj93tPVNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nghrgcnTsopoL6tSxnmf9V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aClzRvksezFuzO8VvM1I9z
          claim_id: c_Z2xJs7LItXlJ_ehUiq8G1F
          source_id: s_2yXyavYpdXiN1vDcFmLrL7
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2yXyavYpdXiN1vDcFmLrL7
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 314011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314011&o=json
            external_identifier: CBDB:314011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3HLf6K3P47HGQj93tPVNE4
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王如綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如綸 | accepted |
| birth.date | 1511年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3HLf6K3P47HGQj93tPVNE4 | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 314011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314011&o=json)
- [中国历代人物传记资料库：王如綸（CBDB 204072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204072&o=json)
