---
schema: wang-person/v1
id: p_9Ebxw9nqUzpjPj6LJw3JKY
status: active
merged_into: null
display_name: 王用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y5xG7XizAd7735CYybWhii
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A83BdDo6KKXBYnzyHeuFdq
          claim_id: c_Y5xG7XizAd7735CYybWhii
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: CBDB:207307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207307）
          source: &a1
            id: s_Rma4qxGwFz8V88WW24kMWD
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 207307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207307&o=json
            external_identifier: CBDB:207307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GwQwaGMn1PMwdeTu1K5JSg
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1399年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBDst9g2ANaVgrpzW2NWsb
          claim_id: c_GwQwaGMn1PMwdeTu1K5JSg
          source_id: s_Rma4qxGwFz8V88WW24kMWD
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
        id: c_uK4xX71F1tEySs28wQti1m
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
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
        - id: cs_4gu86KwPPQ5ESjog49NBrx
          claim_id: c_uK4xX71F1tEySs28wQti1m
          source_id: s_Rma4qxGwFz8V88WW24kMWD
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
        id: c_snpkYZN-VLIj4kwIWhu8k2
        subject_person_id: p_8bLH6jDFtEPUQUPbN8XFMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KruIZ16c81PaoEu3hr62pj
          claim_id: c_snpkYZN-VLIj4kwIWhu8k2
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8bLH6jDFtEPUQUPbN8XFMB
        status: active
        display_name: 王思名
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3U_VnvW1eg9k1Q1Z1eYmwA
        subject_person_id: p_9ouQsZcUnaoXayzCQzDJCM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2vvBP8O7_xMG2-BzScY6q
          claim_id: c_3U_VnvW1eg9k1Q1Z1eYmwA
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9ouQsZcUnaoXayzCQzDJCM
        status: active
        display_name: 王仲祥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| birth.date | 1399年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8bLH6jDFtEPUQUPbN8XFMB | 王思名 | accepted |
| ancestors | p_9ouQsZcUnaoXayzCQzDJCM | 王仲祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 207307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207307&o=json)
