---
schema: wang-person/v1
id: p_K73h57gVicqXY1LCJqEqM3
status: active
merged_into: null
display_name: 王訥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6AYF8iB5vxE2Vy433eUUqj
        subject_person_id: p_K73h57gVicqXY1LCJqEqM3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LXNa9UdSP39iBXN7fZB27W
          claim_id: c_6AYF8iB5vxE2Vy433eUUqj
          source_id: s_R2MpufEDUKyoVdwKN485TC
          stance: supports
          locator: CBDB:510827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510827）
          source: &a1
            id: s_R2MpufEDUKyoVdwKN485TC
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 510827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510827&o=json
            external_identifier: CBDB:510827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kyw7ULWXiNzgCNH1KL6QbC
        subject_person_id: p_K73h57gVicqXY1LCJqEqM3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 510827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FPIPwj74WT_6vI-owjsIJo
          claim_id: c_kyw7ULWXiNzgCNH1KL6QbC
          source_id: s_R2MpufEDUKyoVdwKN485TC
          stance: supports
          locator: CBDB:510827
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

# 王訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訥 | accepted |
| bio.summary | 王訥，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 510827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訥（CBDB 510827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510827&o=json)
