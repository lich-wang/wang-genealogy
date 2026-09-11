---
schema: wang-person/v1
id: p_Ls8KQaTxkN7Y5me48iPD47
status: active
merged_into: null
display_name: 王華年
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_77RmLpEynhjM3o3kZHh19K
        subject_person_id: p_Ls8KQaTxkN7Y5me48iPD47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dggY3GYYQZH7abktCFD4GV
          claim_id: c_77RmLpEynhjM3o3kZHh19K
          source_id: s_C1TfiCKyAAQUeh9j34Qxco
          stance: supports
          locator: CBDB:526954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526954）
          source: &a1
            id: s_C1TfiCKyAAQUeh9j34Qxco
            source_type: api_record
            title: 中国历代人物传记资料库：王華年（CBDB 526954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526954&o=json
            external_identifier: CBDB:526954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EfuCPYGFkEqm7xHKcfEgeC
        subject_person_id: p_Ls8KQaTxkN7Y5me48iPD47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_whRt1re4WGmpLViVGR7fv2
          claim_id: c_EfuCPYGFkEqm7xHKcfEgeC
          source_id: s_C1TfiCKyAAQUeh9j34Qxco
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
        id: c_A9pF8pjQ4jPppoqXOzkuYN
        subject_person_id: p_9XtatSzbUAUbGKWh823XDp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ls8KQaTxkN7Y5me48iPD47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CDxCxcDu7M6N1IkIqJIyPS
          claim_id: c_A9pF8pjQ4jPppoqXOzkuYN
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13128：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AR6R7vvgs7N84GQDgobf6U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 69422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json
            external_identifier: CBDB:69422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9XtatSzbUAUbGKWh823XDp
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王華年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9XtatSzbUAUbGKWh823XDp | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王華年（CBDB 526954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526954&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 69422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json)
