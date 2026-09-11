---
schema: wang-person/v1
id: p_89VYVn1qSaPdbuP2RwCZ4C
status: active
merged_into: null
display_name: 周庭璋
revision: 1
cbdb_id: 122297
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDq_Zzm0cu_43jfAFkmI63
        subject_person_id: p_89VYVn1qSaPdbuP2RwCZ4C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周庭璋
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4yqEgN_C6N9TMp-s-X6SiK
          claim_id: c_JDq_Zzm0cu_43jfAFkmI63
          source_id: s_e2Ysi-zQdT2Hhtns6XpNWP
          stance: supports
          locator: CBDB:122297
          quotation: null
          interpretation_note: CBDB 明确记录的王嬌鸞配偶
          source: &a1
            id: s_e2Ysi-zQdT2Hhtns6XpNWP
            source_type: api_record
            title: 中国历代人物传记资料库：周庭璋（CBDB 122297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122297&o=json
            external_identifier: CBDB:122297
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
        id: c_CfobG3omT7ES71p_fDU12E
        subject_person_id: p_Hgfrs7sQ1QVJHjzXStgS27
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_89VYVn1qSaPdbuP2RwCZ4C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qufqH3Xl3GQg12_p1k3myR
          claim_id: c_CfobG3omT7ES71p_fDU12E
          source_id: s_e2Ysi-zQdT2Hhtns6XpNWP
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4689：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hgfrs7sQ1QVJHjzXStgS27
        status: active
        display_name: 王嬌鸞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周庭璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 周庭璋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Hgfrs7sQ1QVJHjzXStgS27 | 王嬌鸞 | accepted |

## 外部来源

- [中国历代人物传记资料库：周庭璋（CBDB 122297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122297&o=json)
