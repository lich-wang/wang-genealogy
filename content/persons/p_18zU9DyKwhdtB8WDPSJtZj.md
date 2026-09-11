---
schema: wang-person/v1
id: p_18zU9DyKwhdtB8WDPSJtZj
status: active
merged_into: null
display_name: 王森
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8N4mDdPZp8fcL8x6XgJq2b
        subject_person_id: p_18zU9DyKwhdtB8WDPSJtZj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P6HVPAtTur7xxu1MT3uxCA
          claim_id: c_8N4mDdPZp8fcL8x6XgJq2b
          source_id: s_oeommtZkRW5NdH29PcZFdH
          stance: supports
          locator: CBDB:1867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1867）
          source: &a1
            id: s_oeommtZkRW5NdH29PcZFdH
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 1867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1867&o=json
            external_identifier: CBDB:1867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K7aaoGxwxjA4vg2CNh6mj4
        subject_person_id: p_18zU9DyKwhdtB8WDPSJtZj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1035年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_atEKAwRfxAC9vXKQ7EQG2n
          claim_id: c_K7aaoGxwxjA4vg2CNh6mj4
          source_id: s_oeommtZkRW5NdH29PcZFdH
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
        id: c_amJ9Km6K25NvgaormvLaDN
        subject_person_id: p_18zU9DyKwhdtB8WDPSJtZj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1100年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qWK9v2X11g8muzo1K7vfDq
          claim_id: c_amJ9Km6K25NvgaormvLaDN
          source_id: s_oeommtZkRW5NdH29PcZFdH
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
        id: c_bZr62Hy8f86XeCh2nZ2rK6
        subject_person_id: p_18zU9DyKwhdtB8WDPSJtZj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森（1035年—1100年），宋人物。籍贯孟州，入仕進士，曾任提舉、朝奉大夫、朝散郎。（中国历代人物传记资料库 CBDB 1867）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Z-VqHP9__XJDKaSDpgA9r
          claim_id: c_bZr62Hy8f86XeCh2nZ2rK6
          source_id: s_oeommtZkRW5NdH29PcZFdH
          stance: supports
          locator: CBDB:1867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nIvDXK0BRzS2nRgLWECmsw
        subject_person_id: p_4DYdpigk7s5FeUYbqrH9hx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_18zU9DyKwhdtB8WDPSJtZj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HZehq6zDPzoAiWtlr9kH66
          claim_id: c_nIvDXK0BRzS2nRgLWECmsw
          source_id: s_oeommtZkRW5NdH29PcZFdH
          stance: supports
          locator: CBDB PersonKinshipInfo：父（王規）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4DYdpigk7s5FeUYbqrH9hx
        status: active
        display_name: 王規
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| birth.date | 1035年 | accepted |
| death.date | 1100年 | accepted |
| bio.summary | 王森（1035年—1100年），宋人物。籍贯孟州，入仕進士，曾任提舉、朝奉大夫、朝散郎。（中国历代人物传记资料库 CBDB 1867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4DYdpigk7s5FeUYbqrH9hx | 王規 | accepted |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 1867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1867&o=json)
