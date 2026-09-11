---
schema: wang-person/v1
id: p_HgB7fyF4aHyRSGHMdd4CCC
status: active
merged_into: null
display_name: 王孟超
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kbCcA88hofiBeFiFuNmZs2
        subject_person_id: p_HgB7fyF4aHyRSGHMdd4CCC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟超
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TNbrWn4vk4cp18HzViEDwn
          claim_id: c_kbCcA88hofiBeFiFuNmZs2
          source_id: s_Nr6Yjw8KZn7DLgD4kypLG7
          stance: supports
          locator: CBDB:698556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698556）
          source: &a1
            id: s_Nr6Yjw8KZn7DLgD4kypLG7
            source_type: api_record
            title: 中国历代人物传记资料库：王孟超（CBDB 698556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698556&o=json
            external_identifier: CBDB:698556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hNit8h3vHgLKQk2VPsrWBn
        subject_person_id: p_HgB7fyF4aHyRSGHMdd4CCC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟超，明人物。籍贯武進，身份为死國難，入仕武舉進士，曾任都司僉書、守備、遊擊將軍。（中国历代人物传记资料库 CBDB 698556）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hhH6CUq-QFVqu_Y9p0J2Bg
          claim_id: c_hNit8h3vHgLKQk2VPsrWBn
          source_id: s_Nr6Yjw8KZn7DLgD4kypLG7
          stance: supports
          locator: CBDB:698556
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

# 王孟超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟超 | accepted |
| bio.summary | 王孟超，明人物。籍贯武進，身份为死國難，入仕武舉進士，曾任都司僉書、守備、遊擊將軍。（中国历代人物传记资料库 CBDB 698556） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟超（CBDB 698556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698556&o=json)
