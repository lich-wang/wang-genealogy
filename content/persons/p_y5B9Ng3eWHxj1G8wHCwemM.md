---
schema: wang-person/v1
id: p_y5B9Ng3eWHxj1G8wHCwemM
status: active
merged_into: null
display_name: 王雄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H3V34whKV4HW7GfJDm1KB8
        subject_person_id: p_y5B9Ng3eWHxj1G8wHCwemM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1zFUvoMu38GdyDSGYJZP9r
          claim_id: c_H3V34whKV4HW7GfJDm1KB8
          source_id: s_VDQBC4AYkKA59UH9aCYfq6
          stance: supports
          locator: CBDB:231804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231804）
          source: &a1
            id: s_VDQBC4AYkKA59UH9aCYfq6
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 231804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231804&o=json
            external_identifier: CBDB:231804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tutHBq9pRHJPrd37ujEf1i
        subject_person_id: p_y5B9Ng3eWHxj1G8wHCwemM
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
        - id: cs_oeHfTqhM86HMFR5bbg43oF
          claim_id: c_tutHBq9pRHJPrd37ujEf1i
          source_id: s_VDQBC4AYkKA59UH9aCYfq6
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
  ancestors: []
  descendants:
    - claim:
        id: c_0EGa_L90gDMTCdlR3KvU0M
        subject_person_id: p_y5B9Ng3eWHxj1G8wHCwemM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CLdF5UcaR98Rj51619NfpN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TBd_5777GMWidu6u363kip
          claim_id: c_0EGa_L90gDMTCdlR3KvU0M
          source_id: s_VDQBC4AYkKA59UH9aCYfq6
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百九十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CLdF5UcaR98Rj51619NfpN
        status: active
        display_name: 王一之
        merged_into_person_id: null
  other: []
---

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CLdF5UcaR98Rj51619NfpN | 王一之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雄（CBDB 231804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231804&o=json)
