---
schema: wang-person/v1
id: p_tNMzH9tye57N2hA1kpLYob
status: active
merged_into: null
display_name: 王㝢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W8jLvUS8ipnAGHGk17d5Jm
        subject_person_id: p_tNMzH9tye57N2hA1kpLYob
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㝢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4j3SQMwvKUWePGSa2LF5QJ
          claim_id: c_W8jLvUS8ipnAGHGk17d5Jm
          source_id: s_UuYEQGujaqrc86gKBj2DpC
          stance: supports
          locator: CBDB:8155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8155）
          source: &a1
            id: s_UuYEQGujaqrc86gKBj2DpC
            source_type: api_record
            title: 中国历代人物传记资料库：王㝢（CBDB 8155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8155&o=json
            external_identifier: CBDB:8155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hxYwLyLb3s8VLMpGARtwSq
        subject_person_id: p_tNMzH9tye57N2hA1kpLYob
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1130年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YhjQzmZT3DtogWpt7pHCmA
          claim_id: c_hxYwLyLb3s8VLMpGARtwSq
          source_id: s_UuYEQGujaqrc86gKBj2DpC
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
        id: c_6C2iCBRN2xafHKqY4nrTnz
        subject_person_id: p_tNMzH9tye57N2hA1kpLYob
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㝢（卒于1130年），宋人物。籍贯德安，曾任翰林學士、兩府、資政殿學士。（中国历代人物传记资料库 CBDB 8155）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mUYnEhxUquJKqyLsMI1l7k
          claim_id: c_6C2iCBRN2xafHKqY4nrTnz
          source_id: s_UuYEQGujaqrc86gKBj2DpC
          stance: supports
          locator: CBDB:8155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pCftOINz6ojHXdTKYPOEnV
        subject_person_id: p_n6NQ7DT7469Pu952KwCWaA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tNMzH9tye57N2hA1kpLYob
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HCw_wiDt_OUNuTP-yE0TXU
          claim_id: c_pCftOINz6ojHXdTKYPOEnV
          source_id: s_UuYEQGujaqrc86gKBj2DpC
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1736：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n6NQ7DT7469Pu952KwCWaA
        status: active
        display_name: 王易簡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王㝢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㝢 | accepted |
| death.date | 1130年 | accepted |
| bio.summary | 王㝢（卒于1130年），宋人物。籍贯德安，曾任翰林學士、兩府、資政殿學士。（中国历代人物传记资料库 CBDB 8155） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n6NQ7DT7469Pu952KwCWaA | 王易簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王㝢（CBDB 8155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8155&o=json)
