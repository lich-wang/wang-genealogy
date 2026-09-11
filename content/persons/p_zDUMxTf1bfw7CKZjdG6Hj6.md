---
schema: wang-person/v1
id: p_zDUMxTf1bfw7CKZjdG6Hj6
status: active
merged_into: null
display_name: 王錫侯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MAdUnW65qfYx1ZwSVum3Y
        subject_person_id: p_zDUMxTf1bfw7CKZjdG6Hj6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫侯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HVg1UN52N3fM7jJc17DVDD
          claim_id: c_7MAdUnW65qfYx1ZwSVum3Y
          source_id: s_9FDoDiYvtcoxUTQj5ZjMSj
          stance: supports
          locator: CBDB:65827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65827）
          source: &a1
            id: s_9FDoDiYvtcoxUTQj5ZjMSj
            source_type: api_record
            title: 中国历代人物传记资料库：王錫侯（CBDB 65827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65827&o=json
            external_identifier: CBDB:65827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FUYoKVFu36cMe1676AmkgC
        subject_person_id: p_zDUMxTf1bfw7CKZjdG6Hj6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1713年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HF5bHNErzwrboiFH56524J
          claim_id: c_FUYoKVFu36cMe1676AmkgC
          source_id: s_9FDoDiYvtcoxUTQj5ZjMSj
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
        id: c_fr6ZxhJAvTMKvnbhf6bChD
        subject_person_id: p_zDUMxTf1bfw7CKZjdG6Hj6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1777年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_otGRJMr3x4AFMKXEEsKKAp
          claim_id: c_fr6ZxhJAvTMKvnbhf6bChD
          source_id: s_9FDoDiYvtcoxUTQj5ZjMSj
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
        id: c_9vSW5Y6GDx7pyVXMEvDYV2
        subject_person_id: p_zDUMxTf1bfw7CKZjdG6Hj6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫侯（1713年—1777年），清人物。籍贯新昌，身份为科學家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 65827）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3EMkBy6qVT3oBwqThpMDtq
          claim_id: c_9vSW5Y6GDx7pyVXMEvDYV2
          source_id: s_9FDoDiYvtcoxUTQj5ZjMSj
          stance: supports
          locator: CBDB:65827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王錫侯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫侯 | accepted |
| birth.date | 1713年 | accepted |
| death.date | 1777年 | accepted |
| bio.summary | 王錫侯（1713年—1777年），清人物。籍贯新昌，身份为科學家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 65827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫侯（CBDB 65827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65827&o=json)
