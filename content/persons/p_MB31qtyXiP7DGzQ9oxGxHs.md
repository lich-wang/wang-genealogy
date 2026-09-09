---
schema: wang-person/v1
id: p_MB31qtyXiP7DGzQ9oxGxHs
status: active
merged_into: null
display_name: 王預
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oFCMTDjRVRvAcX2MU7Q6mE
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UAzPBe4eqv9LHsTV3cheC6
          claim_id: c_oFCMTDjRVRvAcX2MU7Q6mE
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
          stance: supports
          locator: CBDB:198598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198598）
          source: &a1
            id: s_CwWTF9VA67uJm1TkU6Bmz6
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 198598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198598&o=json
            external_identifier: CBDB:198598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FNPBsLYD5qCXH664ADYUV1
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1423年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_svCGeUPo3tNPwvYMT8XjE7
          claim_id: c_FNPBsLYD5qCXH664ADYUV1
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
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
        id: c_vzXe6ECPoc3swX265rNN4a
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
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
        - id: cs_KMUgDuk86sMFZ4Qpz46nLi
          claim_id: c_vzXe6ECPoc3swX265rNN4a
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
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
  descendants: []
  other: []
---

# 王預

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王預 | accepted |
| birth.date | 1423年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王預（CBDB 198598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198598&o=json)
