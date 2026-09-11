---
schema: wang-person/v1
id: p_Kx5m9AG61yTn4dcbNdJvSZ
status: active
merged_into: null
display_name: 王淇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JXPt11CvyzLHnXrGH1KQeM
        subject_person_id: p_Kx5m9AG61yTn4dcbNdJvSZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKkvYGG5HXFisnByqr4p47
          claim_id: c_JXPt11CvyzLHnXrGH1KQeM
          source_id: s_S4WnZn7C47M9YtfDY7XrZN
          stance: supports
          locator: CBDB:226063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226063）
          source: &a1
            id: s_S4WnZn7C47M9YtfDY7XrZN
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 226063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226063&o=json
            external_identifier: CBDB:226063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LiepyXk7UFCoSvmwvLV5Yc
        subject_person_id: p_Kx5m9AG61yTn4dcbNdJvSZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 226063）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QpXuzxpK_RgAJ4-gS5ObNp
          claim_id: c_LiepyXk7UFCoSvmwvLV5Yc
          source_id: s_S4WnZn7C47M9YtfDY7XrZN
          stance: supports
          locator: CBDB:226063
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
  descendants:
    - claim:
        id: c_GijHQFW4Ej2W1De6LsNfeu
        subject_person_id: p_Kx5m9AG61yTn4dcbNdJvSZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vEIDuPobnB-B0pMAGrHak6
          claim_id: c_GijHQFW4Ej2W1De6LsNfeu
          source_id: s_S4WnZn7C47M9YtfDY7XrZN
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4A86HEw8MTfsRuaTJeDAXg
        status: active
        display_name: 王如堅
        merged_into_person_id: null
  other: []
---

# 王淇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淇 | accepted |
| bio.summary | 王淇，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 226063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4A86HEw8MTfsRuaTJeDAXg | 王如堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淇（CBDB 226063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226063&o=json)
