---
schema: wang-person/v1
id: p_6oVR6jcZSLwQh7SiCa7iHu
status: active
merged_into: null
display_name: 王輔卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wivqC7uzQNK1FMJLXbSrdG
        subject_person_id: p_6oVR6jcZSLwQh7SiCa7iHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XGdK1d5V1SoTFrXfVbyzcq
          claim_id: c_wivqC7uzQNK1FMJLXbSrdG
          source_id: s_eRWVea9L4E7qszP1czJGuo
          stance: supports
          locator: CBDB:457800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457800）
          source: &a1
            id: s_eRWVea9L4E7qszP1czJGuo
            source_type: api_record
            title: 中国历代人物传记资料库：王輔卿（CBDB 457800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457800&o=json
            external_identifier: CBDB:457800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AiBVejPasVshNoQuX1kP1h
        subject_person_id: p_6oVR6jcZSLwQh7SiCa7iHu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔卿，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 457800）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KqLE6cUf3IM6oUfrZaXSVG
          claim_id: c_AiBVejPasVshNoQuX1kP1h
          source_id: s_eRWVea9L4E7qszP1czJGuo
          stance: supports
          locator: CBDB:457800
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

# 王輔卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔卿 | accepted |
| bio.summary | 王輔卿，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 457800） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔卿（CBDB 457800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457800&o=json)
