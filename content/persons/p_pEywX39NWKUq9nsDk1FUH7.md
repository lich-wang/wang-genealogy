---
schema: wang-person/v1
id: p_pEywX39NWKUq9nsDk1FUH7
status: active
merged_into: null
display_name: 王明哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2hMQ6mbG6w9pRmGw94sSJ
        subject_person_id: p_pEywX39NWKUq9nsDk1FUH7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hm2JjmfmZKDjtS7d5zcija
          claim_id: c_R2hMQ6mbG6w9pRmGw94sSJ
          source_id: s_9idBDsJ4YTcBai7gUxyEnL
          stance: supports
          locator: CBDB:249005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249005）
          source: &a1
            id: s_9idBDsJ4YTcBai7gUxyEnL
            source_type: api_record
            title: 中国历代人物传记资料库：王明哲（CBDB 249005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249005&o=json
            external_identifier: CBDB:249005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YCxUiLJM3vj1H5w4uvqoac
        subject_person_id: p_pEywX39NWKUq9nsDk1FUH7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明哲，明人物。成化十一年進士，籍贯長樂。（中国历代人物传记资料库 CBDB 249005）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iMdvSDKEqAZIq4UKY55EL9
          claim_id: c_YCxUiLJM3vj1H5w4uvqoac
          source_id: s_9idBDsJ4YTcBai7gUxyEnL
          stance: supports
          locator: CBDB:249005
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fGoV2koOSYMvWbOJiIwzku
        subject_person_id: p_pEywX39NWKUq9nsDk1FUH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxG6mmOHrdmxosnp0RAxuR
          claim_id: c_fGoV2koOSYMvWbOJiIwzku
          source_id: s_9idBDsJ4YTcBai7gUxyEnL
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pTZB8fs7H6HDdDBGYmoZTE
        status: active
        display_name: 王有恬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明哲 | accepted |
| bio.summary | 王明哲，明人物。成化十一年進士，籍贯長樂。（中国历代人物传记资料库 CBDB 249005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pTZB8fs7H6HDdDBGYmoZTE | 王有恬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明哲（CBDB 249005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249005&o=json)
