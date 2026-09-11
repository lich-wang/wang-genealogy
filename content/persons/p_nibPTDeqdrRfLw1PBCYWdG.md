---
schema: wang-person/v1
id: p_nibPTDeqdrRfLw1PBCYWdG
status: active
merged_into: null
display_name: 王堯臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KYu6E3pXDZN7NUDX4sDjV
        subject_person_id: p_nibPTDeqdrRfLw1PBCYWdG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_et85o14tpi6TKfxd2jPWPh
          claim_id: c_8KYu6E3pXDZN7NUDX4sDjV
          source_id: s_KtUcUS1GdjCAAajr3MBHw2
          stance: supports
          locator: CBDB:1920
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1920）
          source: &a1
            id: s_KtUcUS1GdjCAAajr3MBHw2
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 1920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1920&o=json
            external_identifier: CBDB:1920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2VNBB9zsG7BCqAGBMSEBxb
        subject_person_id: p_nibPTDeqdrRfLw1PBCYWdG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯臣，宋人物。籍贯洛陽，曾任尚書省工部侍郎。（中国历代人物传记资料库 CBDB 1920）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5EwnpnWvOk1Eb52iHhfa92
          claim_id: c_2VNBB9zsG7BCqAGBMSEBxb
          source_id: s_KtUcUS1GdjCAAajr3MBHw2
          stance: supports
          locator: CBDB:1920
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

# 王堯臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯臣 | accepted |
| bio.summary | 王堯臣，宋人物。籍贯洛陽，曾任尚書省工部侍郎。（中国历代人物传记资料库 CBDB 1920） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯臣（CBDB 1920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1920&o=json)
