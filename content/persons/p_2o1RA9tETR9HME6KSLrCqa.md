---
schema: wang-person/v1
id: p_2o1RA9tETR9HME6KSLrCqa
status: active
merged_into: null
display_name: 王秉韜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9rZKnCjFBE48MWb4a1gMb
        subject_person_id: p_2o1RA9tETR9HME6KSLrCqa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉韜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rJb4kx3Mg27zU4shVDA9dW
          claim_id: c_R9rZKnCjFBE48MWb4a1gMb
          source_id: s_tb3LiTyQG9PyLhcGmspSmg
          stance: supports
          locator: CBDB:57157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57157）
          source: &a1
            id: s_tb3LiTyQG9PyLhcGmspSmg
            source_type: api_record
            title: 中国历代人物传记资料库：王秉韜（CBDB 57157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57157&o=json
            external_identifier: CBDB:57157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rZbMLDvPo5zAZ5t6pvzrfy
        subject_person_id: p_2o1RA9tETR9HME6KSLrCqa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1730年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KWbA7yiRu2r6FSCwmTZVRn
          claim_id: c_rZbMLDvPo5zAZ5t6pvzrfy
          source_id: s_tb3LiTyQG9PyLhcGmspSmg
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
        id: c_Bs7Qat9niehLSGbrkH7i1q
        subject_person_id: p_2o1RA9tETR9HME6KSLrCqa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zMdz5NMk9yBpR41yPJijQ2
          claim_id: c_Bs7Qat9niehLSGbrkH7i1q
          source_id: s_tb3LiTyQG9PyLhcGmspSmg
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
        id: c_6CEREe2NPdkzszBH4HZyB2
        subject_person_id: p_2o1RA9tETR9HME6KSLrCqa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉韜（1730年—1802年），清人物。籍贯漢軍鑲紅旗，入仕鄉貢舉人，曾任布政使、府尹、縣知縣。（中国历代人物传记资料库 CBDB 57157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ae13AIq7v8gqCN515zSdmK
          claim_id: c_6CEREe2NPdkzszBH4HZyB2
          source_id: s_tb3LiTyQG9PyLhcGmspSmg
          stance: supports
          locator: CBDB:57157
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_p0zHIsaSpRV7DGZ3vsnNjX
        subject_person_id: p_2o1RA9tETR9HME6KSLrCqa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDfgkwPpURx9ESmmZoj7wq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F6pVBZvZAdRSgSXW_GQ9p8
          claim_id: c_p0zHIsaSpRV7DGZ3vsnNjX
          source_id: s_tb3LiTyQG9PyLhcGmspSmg
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），376：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bDfgkwPpURx9ESmmZoj7wq
        status: active
        display_name: 王祁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秉韜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉韜 | accepted |
| birth.date | 1730年 | accepted |
| death.date | 1802年 | accepted |
| bio.summary | 王秉韜（1730年—1802年），清人物。籍贯漢軍鑲紅旗，入仕鄉貢舉人，曾任布政使、府尹、縣知縣。（中国历代人物传记资料库 CBDB 57157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bDfgkwPpURx9ESmmZoj7wq | 王祁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉韜（CBDB 57157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57157&o=json)
