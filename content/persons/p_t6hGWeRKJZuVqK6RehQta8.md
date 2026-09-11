---
schema: wang-person/v1
id: p_t6hGWeRKJZuVqK6RehQta8
status: active
merged_into: null
display_name: 王錫祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RaC39qXcjY7NHB34tde99N
        subject_person_id: p_t6hGWeRKJZuVqK6RehQta8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pEES9aBEAXNrG6aARMydY2
          claim_id: c_RaC39qXcjY7NHB34tde99N
          source_id: s_sL3K8kuAo3bjrYBUMLL3Pw
          stance: supports
          locator: CBDB:72123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72123）
          source: &a1
            id: s_sL3K8kuAo3bjrYBUMLL3Pw
            source_type: api_record
            title: 中国历代人物传记资料库：王錫祺（CBDB 72123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72123&o=json
            external_identifier: CBDB:72123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZUcyXZ4GqVR6DYo4JSRHuo
        subject_person_id: p_t6hGWeRKJZuVqK6RehQta8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSkNPiP7ccJ3cJTKbLMfL4
          claim_id: c_ZUcyXZ4GqVR6DYo4JSRHuo
          source_id: s_sL3K8kuAo3bjrYBUMLL3Pw
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
        id: c_vLAvmJXAAa1urLKYfAWgsr
        subject_person_id: p_t6hGWeRKJZuVqK6RehQta8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1913年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nP358Y9FQb4FgsfMzRYbNP
          claim_id: c_vLAvmJXAAa1urLKYfAWgsr
          source_id: s_sL3K8kuAo3bjrYBUMLL3Pw
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
        id: c_Zw68EsDmWfKBHGfmzJZZ21
        subject_person_id: p_t6hGWeRKJZuVqK6RehQta8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫祺（1855年—1913年），中華民國人物。籍贯清河。（中国历代人物传记资料库 CBDB 72123）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oGtHpiUowq4c5QesIbjjLX
          claim_id: c_Zw68EsDmWfKBHGfmzJZZ21
          source_id: s_sL3K8kuAo3bjrYBUMLL3Pw
          stance: supports
          locator: CBDB:72123
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

# 王錫祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫祺 | accepted |
| birth.date | 1855年 | accepted |
| death.date | 1913年 | accepted |
| bio.summary | 王錫祺（1855年—1913年），中華民國人物。籍贯清河。（中国历代人物传记资料库 CBDB 72123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫祺（CBDB 72123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72123&o=json)
