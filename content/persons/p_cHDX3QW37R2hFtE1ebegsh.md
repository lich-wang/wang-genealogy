---
schema: wang-person/v1
id: p_cHDX3QW37R2hFtE1ebegsh
status: active
merged_into: null
display_name: 蘇氏
revision: 1
cbdb_id: 699430
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zUjHOGIXLh4byQW-CyjDGg
        subject_person_id: p_cHDX3QW37R2hFtE1ebegsh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N2y4bsol785dO9USwYO2T2
          claim_id: c_zUjHOGIXLh4byQW-CyjDGg
          source_id: s_1wjGRuNXCH7EB0_rzfbWFU
          stance: supports
          locator: CBDB:699430
          quotation: null
          interpretation_note: CBDB 明确记录的王公權配偶
          source: &a1
            id: s_1wjGRuNXCH7EB0_rzfbWFU
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王公權妻)（CBDB 699430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699430&o=json
            external_identifier: CBDB:699430
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
        id: c_ghsD6DIBcxLzKEHm5I8ssZ
        subject_person_id: p_FvL49f7jL5TpJZxAzyUdbZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cHDX3QW37R2hFtE1ebegsh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zFLcJ2WvlRPBRKE87uR1Cl
          claim_id: c_ghsD6DIBcxLzKEHm5I8ssZ
          source_id: s_1wjGRuNXCH7EB0_rzfbWFU
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷 189 蘇昕墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FvL49f7jL5TpJZxAzyUdbZ
        status: active
        display_name: 王公權
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蘇氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蘇氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FvL49f7jL5TpJZxAzyUdbZ | 王公權 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王公權妻)（CBDB 699430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699430&o=json)
