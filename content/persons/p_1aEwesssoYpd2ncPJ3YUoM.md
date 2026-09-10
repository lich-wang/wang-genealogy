---
schema: wang-person/v1
id: p_1aEwesssoYpd2ncPJ3YUoM
status: active
merged_into: null
display_name: 王淇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fCw2zxVoUd2mNDLVrWs48y
        subject_person_id: p_1aEwesssoYpd2ncPJ3YUoM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4tsLeLFV884DsCc6XRLawm
          claim_id: c_fCw2zxVoUd2mNDLVrWs48y
          source_id: s_EXpKZDXoRYAsnN6Gr8cjoj
          stance: supports
          locator: CBDB:697034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697034）
          source: &a1
            id: s_EXpKZDXoRYAsnN6Gr8cjoj
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 697034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697034&o=json
            external_identifier: CBDB:697034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PB5pKDMubxhv6FduXDGTdE
        subject_person_id: p_1aEwesssoYpd2ncPJ3YUoM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jiUPwF3vsNM9325LazTuWq
          claim_id: c_PB5pKDMubxhv6FduXDGTdE
          source_id: s_EXpKZDXoRYAsnN6Gr8cjoj
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
  ancestors:
    - claim:
        id: c_6iycsBcuCO9ebXORzcMgj0
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1aEwesssoYpd2ncPJ3YUoM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y0efAvZ6Su2ps2JYapqq3R
          claim_id: c_6iycsBcuCO9ebXORzcMgj0
          source_id: s_EXpKZDXoRYAsnN6Gr8cjoj
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LKzDYAPDmX1Dcm3kwWWk7w
        status: active
        display_name: 王九言
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LKzDYAPDmX1Dcm3kwWWk7w | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淇（CBDB 697034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697034&o=json)
