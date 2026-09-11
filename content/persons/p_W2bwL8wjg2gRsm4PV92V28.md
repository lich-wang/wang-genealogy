---
schema: wang-person/v1
id: p_W2bwL8wjg2gRsm4PV92V28
status: active
merged_into: null
display_name: 王錫晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a6nnACog4kEU4NQC3icbEB
        subject_person_id: p_W2bwL8wjg2gRsm4PV92V28
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6hZ4j8Q4Tp5prhQ3FmW4Y2
          claim_id: c_a6nnACog4kEU4NQC3icbEB
          source_id: s_yJemb5PHseMeacRTznYwhv
          stance: supports
          locator: CBDB:72120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72120）
          source: &a1
            id: s_yJemb5PHseMeacRTznYwhv
            source_type: api_record
            title: 中国历代人物传记资料库：王錫晉（CBDB 72120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72120&o=json
            external_identifier: CBDB:72120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RCh4zNGCH8JBRggSuyDGY9
        subject_person_id: p_W2bwL8wjg2gRsm4PV92V28
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1867年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xMQHhLQFQhr7iVPDJR7zD9
          claim_id: c_RCh4zNGCH8JBRggSuyDGY9
          source_id: s_yJemb5PHseMeacRTznYwhv
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
        id: c_5C7CwhwQx3FPMZZjnspkTh
        subject_person_id: p_W2bwL8wjg2gRsm4PV92V28
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1927年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XmUXWjWfuZPF3Up6N2e71u
          claim_id: c_5C7CwhwQx3FPMZZjnspkTh
          source_id: s_yJemb5PHseMeacRTznYwhv
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
        id: c_2TEJNRXo8CjdPV62nJB5jW
        subject_person_id: p_W2bwL8wjg2gRsm4PV92V28
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫晉（1867年—1927年），中華民國人物。籍贯無錫。（中国历代人物传记资料库 CBDB 72120）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aMcT6qrtYgvSGZ7Jn8aPWe
          claim_id: c_2TEJNRXo8CjdPV62nJB5jW
          source_id: s_yJemb5PHseMeacRTznYwhv
          stance: supports
          locator: CBDB:72120
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

# 王錫晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫晉 | accepted |
| birth.date | 1867年 | accepted |
| death.date | 1927年 | accepted |
| bio.summary | 王錫晉（1867年—1927年），中華民國人物。籍贯無錫。（中国历代人物传记资料库 CBDB 72120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫晉（CBDB 72120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72120&o=json)
