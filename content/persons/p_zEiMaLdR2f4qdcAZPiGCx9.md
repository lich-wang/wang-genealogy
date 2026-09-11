---
schema: wang-person/v1
id: p_zEiMaLdR2f4qdcAZPiGCx9
status: active
merged_into: null
display_name: 王崇儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_da4F67QC5XJ4QhBZtM57Ya
        subject_person_id: p_zEiMaLdR2f4qdcAZPiGCx9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rcuKSpvkR1W1CSZY8ETSFs
          claim_id: c_da4F67QC5XJ4QhBZtM57Ya
          source_id: s_MgRmdSND6otf269vujHm2h
          stance: supports
          locator: CBDB:301925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301925）
          source: &a1
            id: s_MgRmdSND6otf269vujHm2h
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儒（CBDB 301925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301925&o=json
            external_identifier: CBDB:301925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r7444smGtb5ZGPMcqAbiLb
        subject_person_id: p_zEiMaLdR2f4qdcAZPiGCx9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儒，明人物。嘉靖十七年進士，籍贯淄川，曾任省祭官。（中国历代人物传记资料库 CBDB 301925）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V7SUBYmBnECFyMVTP1zK1s
          claim_id: c_r7444smGtb5ZGPMcqAbiLb
          source_id: s_MgRmdSND6otf269vujHm2h
          stance: supports
          locator: CBDB:301925
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

# 王崇儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇儒 | accepted |
| bio.summary | 王崇儒，明人物。嘉靖十七年進士，籍贯淄川，曾任省祭官。（中国历代人物传记资料库 CBDB 301925） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇儒（CBDB 301925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301925&o=json)
