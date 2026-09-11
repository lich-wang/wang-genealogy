---
schema: wang-person/v1
id: p_aESp1nBMMyVwnp6eCu6H74
status: active
merged_into: null
display_name: 王敬業
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VEe5r7PF3nV6c63WfWtes2
        subject_person_id: p_aESp1nBMMyVwnp6eCu6H74
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T76F3KUt28pyVxJJ9FKP9G
          claim_id: c_VEe5r7PF3nV6c63WfWtes2
          source_id: s_MpHbe4iUuPpaUfhj63KnbH
          stance: supports
          locator: CBDB:148122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148122）
          source: &a1
            id: s_MpHbe4iUuPpaUfhj63KnbH
            source_type: api_record
            title: 中国历代人物传记资料库：王敬業（CBDB 148122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148122&o=json
            external_identifier: CBDB:148122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lst9Fr51FnxobPEQugi8ur
        subject_person_id: p_aESp1nBMMyVwnp6eCu6H74
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mPUoimAENK6FZEdN1KY2AB
          claim_id: c_Lst9Fr51FnxobPEQugi8ur
          source_id: s_MpHbe4iUuPpaUfhj63KnbH
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
        id: c_6Y6Mqm3s0ej6FCLpke-zw8
        subject_person_id: p_gH1Zf7c2UUGbFQrJkFjGFF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aESp1nBMMyVwnp6eCu6H74
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SFxiMHKPJ8lYbpMH28G5Wd
          claim_id: c_6Y6Mqm3s0ej6FCLpke-zw8
          source_id: s_MpHbe4iUuPpaUfhj63KnbH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gH1Zf7c2UUGbFQrJkFjGFF
        status: active
        display_name: 王延
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬業 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gH1Zf7c2UUGbFQrJkFjGFF | 王延 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬業（CBDB 148122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148122&o=json)
