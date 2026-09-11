---
schema: wang-person/v1
id: p_JMTBrHHf3Ax27PTfG4rkZA
status: active
merged_into: null
display_name: 王仲仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9ZxSazbrv4Lao4j5u1sx3
        subject_person_id: p_JMTBrHHf3Ax27PTfG4rkZA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8obPXGDkHQJWJru8qctTm5
          claim_id: c_J9ZxSazbrv4Lao4j5u1sx3
          source_id: s_FkT5yeqEdLrLAqA2ug1qJb
          stance: supports
          locator: CBDB:318406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318406）
          source: &a1
            id: s_FkT5yeqEdLrLAqA2ug1qJb
            source_type: api_record
            title: 中国历代人物传记资料库：王仲仁（CBDB 318406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318406&o=json
            external_identifier: CBDB:318406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pqckQLD3cbWbbCi3HS19PP
        subject_person_id: p_JMTBrHHf3Ax27PTfG4rkZA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲仁，明人物。嘉靖三十二年進士，籍贯高陵，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 318406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zXogSlyKWYs-G3x1uIOzox
          claim_id: c_pqckQLD3cbWbbCi3HS19PP
          source_id: s_FkT5yeqEdLrLAqA2ug1qJb
          stance: supports
          locator: CBDB:318406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_eX9zUHhcaZgWhOZ9LZV9IV
        subject_person_id: p_JMTBrHHf3Ax27PTfG4rkZA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7ZDTot2mHCYEpXe9YLwZZs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAeUxTiSp9M6VH9LVnwWK1
          claim_id: c_eX9zUHhcaZgWhOZ9LZV9IV
          source_id: s_Ku7LWpVqP3Bb5dh1yP9ouV
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ku7LWpVqP3Bb5dh1yP9ouV
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 204388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204388&o=json
            external_identifier: CBDB:204388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7ZDTot2mHCYEpXe9YLwZZs
        status: active
        display_name: 王業
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲仁 | accepted |
| bio.summary | 王仲仁，明人物。嘉靖三十二年進士，籍贯高陵，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 318406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7ZDTot2mHCYEpXe9YLwZZs | 王業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王業（CBDB 204388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204388&o=json)
- [中国历代人物传记资料库：王仲仁（CBDB 318406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318406&o=json)
